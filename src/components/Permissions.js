import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const GetListPermissions = ({ url = '', listName, listGUID }) => {
	let endPoint

	if (!listGUID) {
		if (!listName) {
			return Promise.reject(
				'GetListPermissions requires listGUID or listName'
			)
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/RoleAssignments`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/RoleAssignments`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			console.log(`first response`, response.d.results)
			// RestCall({
			// 	url: url,
			// 	endPoint: `${endPoint}/GetByPrincipalId(${role.PrincipalId})/RoleDefinitionBindings`,
			// })
		})
	}).catch((response) => {
		reject(response)
	})
}

export const BreakListPermissionsInheritance = ({
	url = '',
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
		GetFormDigestValue(url).then((formDigestValue) => {
			let headers = {
				'x-requestdigest': formDigestValue,
			}

			RestCall({
				url: url,
				endPoint: endPoint,
				method: method,
				headers: headers,
			})
				.then((response) => {
					resolve(response.d)
				})
				.catch((response) => {
					reject(response)
				})
		})
	})
}
