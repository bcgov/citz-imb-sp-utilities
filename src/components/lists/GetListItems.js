import { RestCall } from 'components/common/RestCall'

export const GetListItems = ({
	baseurl = '',
	listName,
	listGUID,
	filter,
	expand,
	select,
}) => {
	let endPoint
	let parameters = []

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

	if (select) {
		parameters.push(`$select=${select}`)
	}

	if (expand) {
		parameters.push(`$expand=${expand}`)
	}

	if (filter) {
		parameters.push(`$filter=${filter}`)
	}

	if (parameters.length) {
		endPoint += `?${parameters.join('&')}`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.results)
			})
			.catch((response) => {
				reject(`GetListItems::${response}`)
			})
	})
}
