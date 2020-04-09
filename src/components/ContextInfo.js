import { RestCall } from '../utilities/Common'

export const GetContextWebInformation = (url = '') => {
	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: '/_api/contextinfo', method: 'post' })
			.then((response) => {
				resolve(response.d.GetContextWebInformation)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetFormDigestValue = (url) => {
	return new Promise((resolve, reject) => {
		GetContextWebInformation(url)
			.then((response) => {
				resolve(response.FormDigestValue)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetCurrentUser = (url = '') => {
	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: '/_api/web/CurrentUser' })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}
