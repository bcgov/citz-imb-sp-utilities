import { RestCall } from '../common/RestCall'

export const GetSite = ({baseurl = ''}) => {
	console.log('GetSite')
	const endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject,ParentWeb`
	let endPoint = `/_api/web${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetSite::${response}`)
			})
	})
}

export default GetSite