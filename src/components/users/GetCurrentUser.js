import { RestCall } from '../common/RestCall'

export const GetCurrentUser = (baseurl = '') => {
	let endPoint = '/_api/web/CurrentUser'
	
	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetCurrentUser::${response}`)
			})
	})
}
