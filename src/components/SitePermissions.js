import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const GetSitePermissions = (baseurl = '') => {
	let endPointParameters = `?$expand=RoleDefinitionBindings,Member`
	let endPoint = `/_api/web/RoleAssignments${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint }).then((response) => {
			resolve(response.d.results)
		})
	}).catch((response) => {
		reject(response)
	})
}

export const BreakSitePermissionsInheritance = ({
	baseurl = '',
	copy = true,
	clear = false,
}) => {
	let endPoint = `/_api/web/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
	let method = 'post'

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

export const ResetSitePermissionsInheritance = (baseurl = '') => {
	let endPoint = `/_api/web/resetroleinheritance`
	let method = 'post'

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

export const RemovePermissionsFromSite = ({
	baseurl = '',
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
				reject(response)
			})
	})
}

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
				reject(response)
			})
	})
}
