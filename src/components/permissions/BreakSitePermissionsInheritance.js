import { RestCall } from '../common/RestCall'

export const BreakSitePermissionsInheritance = ({
	baseurl = '',
	copy = true,
	clear = false,
}) => {
	let endPoint = `/_api/web/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
	let method = 'post'

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: method,
			headers: headers,
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`BreakSitePermissionsInheritance::${response}`)
			})
	})
}
