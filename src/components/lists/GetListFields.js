import { RestCall } from 'Components'

export const GetListFields = (props) => {
	const { baseurl = '', listName, listGUID } = props
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('GetListFields requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/Fields`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/Fields`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.results)
			})
			.catch((response) => {
				reject(`GetListFields::${response}`)
			})
	})
}
