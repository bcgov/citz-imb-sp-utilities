import { RestCall } from '../common/RestCall'

export const RemoveItemsFromList = ({
	baseurl = '',
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
					url: baseurl,
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
			.catch((response) => {
				reject(`RemoveItemsFromList::${response}`)
			})
	})
}
