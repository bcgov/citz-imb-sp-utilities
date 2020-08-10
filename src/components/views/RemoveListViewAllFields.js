import { RestCall } from '../common/RestCall'

export const RemoveListViewAllFields = ({
	baseurl = '',
	listName,
	listGUID,
	viewGUID,

}) => {
	let endPoint
	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('RemoveListViewAllFields requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')`
	}

	if (!viewGUID) {
		return new Promise((resolve, reject) => {
			reject('RemoveListViewAllFields requires viewGUID')
		})
	} else {
		endPoint = `${endPoint}/Views('${viewGUID}')/ViewFields/removeallviewfields`

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
