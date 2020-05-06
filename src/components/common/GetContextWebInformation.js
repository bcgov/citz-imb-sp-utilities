import { RestCall } from '../common/RestCall'

export const GetContextWebInformation = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: '/_api/contextinfo', method: 'post' })
			.then((response) => {
				resolve(response.d.GetContextWebInformation)
			})
			.catch((response) => {
				reject(`GetContextWebInformation::${response}`)
			})
	})
}
