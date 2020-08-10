import { RestCall } from '../common/RestCall'

export const SetListViewFieldIndex = ({
	baseurl = '',
	listName,
	listGUID,
	viewGUID,
	field,
	index = 0,
}) => {
	let endPoint
	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('SetListViewFieldIndex requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')`
	}

	if (!viewGUID) {
		return new Promise((resolve, reject) => {
			reject('SetListViewFieldIndex requires viewGUID')
		})
	} else {
		endPoint = `${endPoint}/Views('${viewGUID}')/ViewFields/moveviewfieldto`
	}

	if (!field) {
		return new Promise((resolve, reject) => {
			reject('SetListViewFieldIndex requires field')
		})
	}

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: 'post',
			body: { field: field, index: index },
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`SetListViewFieldIndex::${response}`)
			})
	})
}
