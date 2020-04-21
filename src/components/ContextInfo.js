import { RestCall } from '../utilities/Common'

export const GetContextWebInformation = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: '/_api/contextinfo', method: 'post' })
			.then((response) => {
				resolve(response.d.GetContextWebInformation)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetFormDigestValue = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		GetContextWebInformation(baseurl)
			.then((response) => {
				resolve(response.FormDigestValue)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetCurrentUser = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: '/_api/web/CurrentUser' })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}
