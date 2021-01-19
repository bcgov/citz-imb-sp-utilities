import { RestCall } from '../../Components'

export const AddPermissionsToSite = ({ baseurl = '', principalId, roleDefId }) => {
	let endPoint
	let method = 'post'

	if (!principalId) {
		return Promise.reject('AddPermissionsToList requires principalId')
	} else {
		if (!roleDefId) {
			return Promise.reject('AddPermissionsToList requires roleDefId')
		} else {
			endPoint = `/_api/web/RoleAssignments/addRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
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
				reject(`AddPermissionsToSite::${response}`)
			})
	})
}