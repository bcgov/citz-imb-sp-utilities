import { GetContextWebInformation } from './GetContextWebInformation'

export const GetFormDigestValue = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		GetContextWebInformation(baseurl)
			.then((response) => {
				resolve(response.FormDigestValue)
			})
			.catch((response) => {
				reject(`GetFormDigestValue::${response}`)
			})
	})
}
