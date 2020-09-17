import { RestCall, isGuid } from 'Components'

export const GetListFields = (props) => {
	let baseurl = ''
	let listName
	let listGUID
	let expand = ''
	let filter = ''
	let select = ''
	let endPoint

	if (!props) {
		return Promise.reject('GetListFields requires listGUID or listName')
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

	let endPointParameters = []
	if (expand) endPointParameters.push(`$expand=${expand}`)
	if (filter) endPointParameters.push(`$filter=${filter}`)
	if (select) endPointParameters.push(`$select=${select}`)

	if (endPointParameters.length) {
		endPoint += `?${endPointParameters.join('&')}`
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
