import { RestCall } from '../../Components'

export const GetSitePermissions = (baseurl = '') => {
	let endPointParameters = `?$expand=RoleDefinitionBindings,Member`
	let endPoint = `/_api/web/RoleAssignments${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.results)
			})
			.catch((response) => {
				reject(`GetSitePermissions::${response}`)
			})
	})
}
