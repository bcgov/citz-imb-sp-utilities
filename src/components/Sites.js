import { RestCall } from '../utilities/Common'

export const GetSite = ({ url = ''}) => {
	const endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject`
	let endPoint = `/_api/web${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}
