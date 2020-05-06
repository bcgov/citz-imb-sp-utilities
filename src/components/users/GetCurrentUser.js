import { RestCall } from '../common/RestCall'

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