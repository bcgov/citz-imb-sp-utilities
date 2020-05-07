import { RestCall } from '../common/RestCall'

export const DeleteList = ({ baseurl = '', listName, listGUID }) => {
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
		RestCall({ url: baseurl, endPoint: endPoint, method: 'post' })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`DeleteList::${response}`)
			})
	})
}