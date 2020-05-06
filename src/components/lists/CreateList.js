import { RestCall } from '../common/RestCall'

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
		GetFormDigestValue(baseurl).then((formDigestValue) => {
			let headers = {
				'x-requestdigest': formDigestValue,
				accept: 'application/json; odata=verbose',
				'content-type': 'application/json; odata=verbose',
			}

			RestCall({
				url: baseurl,
				endPoint: endPoint,
				method: method,
				body: body,
				headers: headers,
			})
				.then((response) => {
					resolve(response.d)
				})
				.catch((response) => {
					reject(response)
				})
		})
	})
}