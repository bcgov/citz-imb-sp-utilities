import { RestCall } from '../common/RestCall'

export const GetListViews = ({
	baseurl = '',
	listName,
	listGUID,
	viewGUID,
}) => {
	let endPoint
	let parameters = '?$expand=ViewFields'
	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetListViews requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/Views`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/Views`
	}

	if (viewGUID) {
		endPoint = `${endPoint}('${viewGUID}')`
	}

	endPoint = `${endPoint}${parameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetListViews::${response}`)
			})
	})
}
