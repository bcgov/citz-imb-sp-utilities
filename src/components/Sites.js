import { RestCall } from '../utilities/Common'

export const GetSite = (baseurl = '') => {
	const endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject,ParentWeb`
	let endPoint = `/_api/web${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetCollection = (baseurl = '') => {
	let endPoint = `/_api/web`

	if (baseurl === '') baseurl = _spPageContextInfo.siteAbsoluteUrl

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}
