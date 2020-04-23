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
				resolve(response.json())
			} else {
				reject(`${response.status} ${response.statusText}`)
			}
		})
	})
}
