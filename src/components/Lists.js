import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const GetList = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d)
		})
	})
}

export const DeleteList = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('DeleteList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/recycle`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/recycle`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint, method: 'post' }).then((response) => {
			resolve(response.d)
		})
	})
}

export const CreateList = ({
	url = '',
	listName,
	allowContentTypes = false,
	baseTemplate = 100,
	contentTypesEnabled = false,
	description = '',
}) => {
	let endPoint
	let method = 'post'
	let body = {
		__metadata: {
			type: 'SP.List',
        },
        Title: listName,
		AllowContentTypes: allowContentTypes,
		BaseTemplate: baseTemplate,
		ContentTypesEnabled: contentTypesEnabled,
		Description: description,
	}

	if (!listName) {
		return new Promise((resolve, reject) => {
			reject('CreateList requires listName')
		})
	} else {
		endPoint = `/_api/web/Lists`
	}

	return new Promise((resolve, reject) => {
		GetFormDigestValue(url).then((formDigestValue) => {
			let headers = {
				'x-requestdigest': formDigestValue,
				accept: 'application/json; odata=verbose',
				'content-type': 'application/json; odata=verbose',
			}

			RestCall({
				url: url,
				endPoint: endPoint,
				method: method,
				body: body,
				headers: headers,
			}).then((response) => {
				resolve(response.d)
			})
		})
	})
}

export const GetListItems = ({
	url = '',
	listName,
	listGUID,
	filter,
	expand,
}) => {
	let endPoint
	let parameters = '?'

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/items`
	}

	if (filter) {
		parameters += `$filter=${filter}`
	}

	if (expand) {
		parameters += `$expand=${expand}`
	}

	if (parameters !== '?') {
		endPoint += parameters
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d.results)
		})
	})
}

export const AddItemsToList = ({ url = '', listName, listGUID, items }) => {
	let endPoint

	if (!items) {
		return new Promise((resolve, reject) => {
			reject('AddItemsToList requires items')
		})
	} else {
		if (!Array.isArray(items)) {
			items = [items]
		}
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('AddItemsToList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/items`
	}

	return new Promise((resolve, reject) => {
		let fetches = []

		Promise.all([
			GetList({ url, listName, listGUID }),
			GetFormDigestValue(),
		]).then((response) => {
			for (let i = 0; i < items.length; i++) {
				items[i].__metadata = {
					type: response[0].ListItemEntityTypeFullName,
				}
				fetches.push(
					RestCall({
						url: url,
						endPoint: endPoint,
						method: 'post',
						body: items[i],
						headers: {
							'x-requestdigest': response[1],
							accept: 'application/json; odata=verbose',
							'content-type': 'application/json; odata=verbose',
						},
					})
				)
			}

			Promise.all(fetches)
				.then((response) => {
					resolve(
						response.map((item) => {
							return item.d
						})
					)
				})
				.catch((error) => {
					reject(error)
				})
		})
	})
}

export const RemoveItemsFromList = ({
	url = '',
	listName,
	listGUID,
	itemIds,
}) => {
	let endPoint

	if (!itemIds) {
		return new Promise((resolve, reject) => {
			reject('RemoveItemsFromList requires items')
		})
	} else {
		if (!Array.isArray(itemIds)) {
			itemIds = [itemIds]
		}
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('RemoveItemsFromList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/items`
	}

	return new Promise((resolve, reject) => {
		let fetches = []

		for (let i = 0; i < itemIds.length; i++) {
			fetches.push(
				RestCall({
					url: url,
					endPoint: `${endPoint}(${itemIds[i]})/recycle`,
					method: 'post',
					headers: {
						'x-http-method': 'delete',
						'if-match': '*',
					},
				})
			)
		}

		Promise.all(fetches)
			.then((response) => {
				resolve(
					response.map((item) => {
						return item.d
					})
				)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export const GetListViews = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetListViews requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/Views?$expand=ViewFields`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/Views?$expand=ViewFields`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d)
		})
	})
}

export const GetListDefaultView = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetListViews requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/DefaultView?$expand=ViewFields`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/DefaultView?$expand=ViewFields`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d)
		})
	})
}

export const GetListFields = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetListFields requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/Fields`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/Fields`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d.results)
		})
	})
}
