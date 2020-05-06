import { RestCall } from '../common/RestCall'

export const GetListPermissions = ({ baseurl = '', listName, listGUID }) => {
	let endPoint
	let endPointParameters = `?$expand=RoleDefinitionBindings,Member`

	if (!listGUID) {
		if (!listName) {
			return Promise.reject(
				'GetListPermissions requires listGUID or listName'
			)
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/RoleAssignments${endPointParameters}`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/RoleAssignments${endPointParameters}`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint }).then((response) => {
			resolve(response.d.results)
		})
	}).catch((response) => {
		reject(response)
	})
}
