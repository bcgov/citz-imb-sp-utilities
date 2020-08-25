import { GetContextWebInformation } from 'Components'

export const GetFormDigestValue = () => {
	return new Promise((resolve, reject) => {
		GetContextWebInformation('')
			.then((response) => {
				resolve(response.FormDigestValue)
			})
			.catch((response) => {
				reject(`GetFormDigestValue::${response}`)
			})
	})
}
