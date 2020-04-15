import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const GetSitePermissions = ({ url = '' }) => {
	let endPointParameters = `?$expand=RoleDefinitionBindings,Member`
	let endPoint = `/_api/web/RoleAssignments${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint }).then((response) => {
			resolve(response.d.results)
		})
	}).catch((response) => {
		reject(response)
	})
}

export const BreakSitePermissionsInheritance = ({
	url = '',
	copy = true,
	clear = false,
}) => {
	let endPoint = `/_api/web/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
	let method = 'post'

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

export const ResetSitePermissionsInheritance = ({ url = '' }) => {
	let endPoint = `/_api/web/resetroleinheritance`
	let method = 'post'

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

export const RemovePermissionsFromList = ({
	url = '',
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
			url: url,
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
	url = '',
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
			return Promise.reject('AddPermissionsToList requires roleDefId')
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
			url: url,
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
