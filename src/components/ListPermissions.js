import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

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
		GetFormDigestValue(baseurl).then((formDigestValue) => {
			let headers = {
				'x-requestdigest': formDigestValue,
			}

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
					reject(response)
				})
		})
	})
}

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
				reject(response)
			})
	})
}
