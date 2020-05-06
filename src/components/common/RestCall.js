import { GetFormDigestValue } from './GetFormDigestValue'

export const RestCall = ({
	url = '',
	endPoint,
	method = 'get',
	body = '',
	headers,
}) => {
	const doFetch = (url, endPoint, options) => {
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

	if (url === '') {
		if (typeof _spPageContextInfo === 'undefined') {
			return Promise.reject(
				'RestCall:: _spPageContextInfo is not defined'
			)
		} else {
			url = _spPageContextInfo.webAbsoluteUrl
		}
	}

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
		if (options.method.toLowerCase() === 'post') {
			GetFormDigestValue(url).then((response) => {
				options.headers['X-RequestDigest'] = response
				doFetch(url, endPoint, options)
					.then((response) => {
						resolve(response)
					})
					.catch((response) => {
						reject(response)
					})
			})
		} else {
			doFetch(url, endPoint, options)
				.then((response) => {
					resolve(response)
				})
				.catch((response) => {
					reject(response)
				})
		}
	})
}
