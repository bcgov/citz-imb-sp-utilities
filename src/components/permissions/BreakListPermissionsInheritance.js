import { RestCall } from '../common/RestCall'

export const BreakListPermissionsInheritance = ({
	baseurl = '',
	listName,
	listGUID,
	copy = true,
	clear = false,
}) => {
	let endPoint
	let method = 'post'

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('BreakInheritanceOnList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
	}

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
				reject(`BreakListPermissionsInheritance::${response}`)
			})
	})
}
