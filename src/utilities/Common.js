export const RestCall = ({
	url = '',
	endPoint,
	method = 'get',
	body = '',
	headers,
}) => {

	if (url === '') url = _spPageContextInfo.webAbsoluteUrl

	let options = { method: method }

	if (typeof body !== 'string') {
		options.body = JSON.stringify(body)
	} else {
		if (body !== '') options.body = body
	}

	if (headers) {
		options.headers = headers
	} else {
		options.headers = {
			Accept: 'application/json;odata=verbose',
			'content-type': 'application/json;odata=verbose',
		}
	}

	return new Promise((resolve, reject) => {
		fetch(`${url}${endPoint}`, options).then((response) => {
			if (response.ok) {
				console.groupCollapsed('--RestCall Details', endPoint)
				console.warn(`url: '${url}'`)
				console.warn(`endPoint: '${endPoint}'`)
				console.warn(`method: '${method}'`)
				console.warn(`body:`, options.body)
				console.warn(`headers:`, options.headers)
				console.warn(`results: ${response}`)
				console.groupEnd()
				resolve(response.json())
			} else {
				console.groupCollapsed('--RestCall Details - not OK')
				console.warn(`url: '${url}'`)
				console.warn(`endPoint: '${endPoint}'`)
				console.warn(`method: '${method}'`)
				console.warn(`body:`, options.body)
				console.warn(`headers:`, options.headers)
				console.warn(
					`results: ${response.status} ${response.statusText}`
				)
				console.groupEnd()
				reject(`${response.status} ${response.statusText}`)
			}
		})
	})
}
