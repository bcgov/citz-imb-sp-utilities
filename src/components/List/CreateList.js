import { RestCall } from 'Components'

export const CreateList = ({
	baseurl = '',
	listName,
	allowContentTypes = false,
	baseTemplate = 100,
	contentTypesEnabled = false,
	description = '',
}) => {
	let endPoint
	let method = 'post'
	let body = {
		__metadata: {
			type: 'SP.List',
		},
		Title: listName,
		AllowContentTypes: allowContentTypes,
		BaseTemplate: baseTemplate,
		ContentTypesEnabled: contentTypesEnabled,
		Description: description,
	}

	if (!listName) {
		return new Promise((resolve, reject) => {
			reject('CreateList requires listName')
		})
	} else {
		endPoint = `/_api/web/Lists`
	}

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: method,
			body: body,
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`CreateList::${response}`)
			})
	})
}
