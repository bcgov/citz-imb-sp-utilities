import { RestCall } from '../common/RestCall'

export const GetList = ({ baseurl = '', listName, listGUID, expand = '' }) => {
	let endPoint
	let endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject,RootFolder`

	if (expand) endPointParameters += `,${expand}`

	if (!listGUID) {
		if (!listName) {
			return Promise.reject('GetList requires listGUID or listName')
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')${endPointParameters}`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')${endPointParameters}`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetList::${response}`)
			})
	})
}