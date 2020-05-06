import { RestCall } from '../common/RestCall'

export const RemovePermissionsFromList = ({
	baseurl = '',
	listName,
	listGUID,
	principalId,
	roleDefId,
}) => {
	let endPoint
	let method = 'post'

	if (!principalId) {
		return Promise.reject('RemovePermissionsFromList requires principalId')
	} else {
		if (!roleDefId) {
			return Promise.reject(
				'RemovePermissionsFromList requires roleDefId'
			)
		} else {
			if (!listGUID) {
				if (!listName) {
					return Promise.reject(
						'RemovePermissionsFromList requires listGUID or listName'
					)
				} else {
					endPoint = `/_api/web/Lists/getByTitle('${listName}')/RoleAssignments/removeRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
				}
			} else {
				endPoint = `/_api/web/Lists('${listGUID}')/RoleAssignments/removeRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
			}
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
				reject(response)
			})
	})
}