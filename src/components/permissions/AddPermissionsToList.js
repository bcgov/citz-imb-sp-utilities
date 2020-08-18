import { RestCall } from 'components/common/RestCall'

export const AddPermissionsToList = ({
	baseurl = '',
	listName,
	listGUID,
	principalId,
	roleDefId,
}) => {
	let endPoint
	let method = 'post'

	if (!principalId) {
		return Promise.reject('AddPermissionsToList requires principalId')
	} else {
		if (!roleDefId) {
			return Promise.reject(
				'AddPermissionsToList requires roleDefId'
			)
		} else {
			if (!listGUID) {
				if (!listName) {
					return Promise.reject(
						'AddPermissionsToList requires listGUID or listName'
					)
				} else {
					endPoint = `/_api/web/Lists/getByTitle('${listName}')/RoleAssignments/addRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
				}
			} else {
				endPoint = `/_api/web/Lists('${listGUID}')/RoleAssignments/addRoleAssignment(principalid=${principalId},roledefid=${roleDefId})`
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
				reject(`AddPermissionsToList::${response}`)
			})
	})
}