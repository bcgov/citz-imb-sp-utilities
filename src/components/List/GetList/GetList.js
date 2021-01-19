import { RestCall, isGuid } from '../../../Components'

export const GetList = (props) => {
	let baseurl = ''
	let listName
	let listGUID
	let expand = ''
	let filter = ''
	let select = ''
	let endPoint

	if (!props) {
		return Promise.reject('GetList requires listGUID or listName')
	} else if (isGuid(props)) {
		listGUID = props
	} else if (typeof props === 'string') {
		listName = props
	} else {
		;({
			baseurl = '',
			listName,
			listGUID,
			expand = '',
			filter = '',
			select = '',
		} = props)
	}

	let endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject,RootFolder`
	if (expand) endPointParameters += `,${expand}`
	if (filter) endPointParameters += `&$filter=${filter}`
	if (select) endPointParameters += `&$select=${select}`


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
