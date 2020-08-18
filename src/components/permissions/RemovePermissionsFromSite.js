import { RestCall } from 'components/common/RestCall'

export const RemovePermissionsFromSite = ({
	baseurl = '',
	principalId,
	roleDefId,
}) => {
	let endPoint
	let method = 'post'

	if (!principalId) {
		return Promise.reject('RemovePermissionsFromSite requires principalId')
	} else {
		if (!roleDefId) {
			return Promise.reject(
				'RemovePermissionsFromSite requires roleDefId'
			)
		} else {
			endPoint = `/_api/web/RoleAssignments/removeRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
		}
	}

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: method,
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`RemovePermissionsFromSite::${response}`)
			})
	})
}