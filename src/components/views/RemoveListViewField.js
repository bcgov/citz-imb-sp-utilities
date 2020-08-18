import { RestCall } from 'components/common/RestCall'

export const RemoveListViewField = ({
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
				reject('RemoveListViewField requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')`
	}

	if (!viewGUID) {
		return new Promise((resolve, reject) => {
			reject('RemoveListViewField requires viewGUID')
		})
	} else {
		endPoint = `${endPoint}/Views('${viewGUID}')/ViewFields/removeviewfield('${field}')`

	}

	if (!field) {
		return new Promise((resolve, reject) => {
			reject('RemoveListViewField requires field')
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
				reject(`RemoveListViewField::${response}`)
			})
	})
}
