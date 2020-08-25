import { RestCall } from 'Components'

export const GetListDefaultView = ({ baseurl = '', listName, listGUID }) => {
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
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetListDefaultView::${response}`)
			})
	})
}