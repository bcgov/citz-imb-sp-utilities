import { RestCall } from '../../Components'

export const AddListViewField = ({
	baseurl = '',
	listName,
	listGUID,
	viewGUID,
	field,
}) => {
	let endPoint
	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('AddListViewField requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')`
	}

	if (!viewGUID) {
		return new Promise((resolve, reject) => {
			reject('AddListViewField requires viewGUID')
		})
	} else {
		endPoint = `${endPoint}/Views('${viewGUID}')/ViewFields/addviewfield('${field}')`

	}

	if (!field) {
		return new Promise((resolve, reject) => {
			reject('AddListViewField requires field')
		})
	}

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: 'post',
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`AddListViewField::${response}`)
			})
	})
}
