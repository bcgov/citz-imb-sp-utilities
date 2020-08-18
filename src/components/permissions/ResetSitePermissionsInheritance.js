import { RestCall } from '../common/RestCall'

export const ResetSitePermissionsInheritance = ({baseurl = ''}) => {
	let endPoint = `/_api/web/resetroleinheritance`
	let method = 'post'

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: method
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`ResetSitePermissionsInheritance::${response}`)
			})
	})
}
