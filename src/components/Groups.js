import { GetFormDigestValue, GetContextWebInformation } from './ContextInfo'
import { RestCall } from '../utilities/Common'

export const GetGroup = ({ url = '', groupId, groupName }) => {
	let endPoint

	if (!groupId) {
		if (!groupName) {
			return Promise.reject('GetGroup requires GroupId or GroupName')
		} else {
			endPoint = `/_api/web/SiteGroups/getByName('${groupName}')`
		}
	} else {
		endPoint = `/_api/web/SiteGroups(${groupId})`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetGroupMembers = ({ url = '', groupId, groupName }) => {
	let endPoint

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'GetGroupMembers requires GroupId or GroupName'
			)
		} else {
			endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users`
		}
	} else {
		endPoint = `/_api/web/SiteGroups(${groupId})/Users`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: url, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.results)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const AddUsersToGroup = ({
	url = '',
	groupId,
	groupName,
	loginName,
}) => {
	let endPoint

	if (!loginName) {
		return Promise.reject('AddUsersToGroup requires loginName')
	} else {
		if (!Array.isArray(loginName)) {
			loginName = [loginName]
		}
	}

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'AddUsersToGroup requires GroupId or GroupName'
			)
		} else {
			endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users(${LoginName})`
		}
	} else {
		endPoint = `/_api/web/SiteGroups(${groupId})/Users`
	}

	return new Promise((resolve, reject) => {
		let fetches = []

		for (let i = 0; i < loginName.length; i++) {
			fetches.push(
				RestCall({
					url: url,
					endPoint: endPoint,
					method: 'post',
					body: {
						__metadata: {
							type: 'SP.User',
						},
						LoginName: loginName[i],
					},
					headers: {
						accept: 'application/json; odata=verbose',
						'content-type': 'application/json; odata=verbose',
					},
				})
			)
		}

		Promise.all(fetches)
			.then((data) => {
				resolve(
					data.map((user) => {
						return user.d
					})
				)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const RemoveUsersFromGroup = ({
	url = '',
	groupId,
	groupName,
	loginName,
	userId,
}) => {
	let endPoint

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'RemoveUsersFromGroup requires GroupId or GroupName'
			)
		} else {
			endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users`
		}
	} else {
		endPoint = `/_api/web/SiteGroups(${groupId})/Users`
	}

	if (!loginName) {
		if (!userId) {
			return Promise.reject(
				'RemoveUserFromGroup requires userId or logonName'
			)
		} else {
			if (!Array.isArray(userId)) {
				userId = [userId]
			}
		}
	} else {
		if (!Array.isArray(loginName)) {
			userId = [loginName]
		}
	}

	return new Promise((resolve, reject) => {
		GetFormDigestValue(url).then((digestValue) => {
			let fetches = []

			if (loginName) {
				for (let i = 0; i < loginName.length; i++) {
					fetches.push(
						RestCall({
							url: url,
							endPoint: `${endPoint}/removeByLoginName('${loginName[i]}')`,
							method: 'post',
							headers: {
								'x-requestdigest': digestValue,
								accept: 'application/json; odata=verbose',
								'content-type':
									'application/json; odata=verbose',
							},
						})
					)
				}
			} else {
				for (let i = 0; i < userId.length; i++) {
					fetches.push(
						RestCall({
							url: url,
							endPoint: `${endPoint}/removeByID(${userId[i]})`,
							method: 'post',
							headers: {
								'x-requestdigest': digestValue,
								accept: 'application/json; odata=verbose',
								'content-type':
									'application/json; odata=verbose',
							},
						})
					)
				}
			}

			Promise.all(fetches)
				.then((data) => {
					resolve(
						data.map((user) => {
							return user.d
						})
					)
				})
				.catch((response) => {
					reject(response)
				})
		})
	})
}

export const CreateGroup = ({ url = '', groupName, groupDescription = '' }) => {
	let endPoint
	const method = 'post'
	const body = {
		__metadata: { type: 'SP.Group' },
		Description: groupDescription,
		Title: groupName,
	}

	if (!groupName) {
		return Promise.reject('CreateGroup requires GroupName')
	} else {
		endPoint = `/_api/web/SiteGroups`
	}

	return new Promise((resolve, reject) => {
		GetFormDigestValue(url).then((response) => {
			const headers = {
				accept: 'application/json; odata=verbose',
				'content-type': 'application/json; odata=verbose',
				'x-requestdigest': response,
			}
			RestCall({
				url: url,
				endPoint: endPoint,
				method: method,
				body: body,
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

export const GetAssociatedGroups = (url = '') => {
	return new Promise((resolve, reject) => {
		Promise.all([
			RestCall({ url: url, endPoint: `/_api/Web/AssociatedOwnerGroup` }),
			RestCall({ url: url, endPoint: `/_api/Web/AssociatedMemberGroup` }),
			RestCall({
				url: url,
				endPoint: `/_api/Web/AssociatedVisitorGroup`,
			}),
		])
			.then((response) => {
				resolve({
					AssociatedOwnerGroup: response[0].d,
					AssociatedMemberGroup: response[1].d,
					AssociatedVisitorGroup: response[2].d,
				})
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const ChangeGroupOwner = ({
	url = '',
	groupId,
	groupName,
	ownerGroupId,
	ownerGroupName,
}) => {
	let clientContext = new SP.ClientContext(
		'https://citz.sp.gov.bc.ca/sites/dev'
	)
	let group
	let ownerGroup

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'ChangeGroupOwner requires groupId or groupName'
			)
		} else {
			group = clientContext
				.get_web()
				.get_siteGroups()
				.getByName(groupName)
		}
	} else {
		group = clientContext.get_web().get_siteGroups().getById(groupId)
	}

	if (!ownerGroupId) {
		if (!ownerGroupName) {
			return Promise.reject(
				'ChangeGroupOwner requires ownerGroupId or ownerGroupName'
			)
		} else {
			ownerGroup = clientContext
				.get_web()
				.get_siteGroups()
				.getByName(ownerGroupName)
		}
	} else {
		ownerGroup = clientContext
			.get_web()
			.get_siteGroups()
			.getById(ownerGroupId)
	}

	return new Promise((resolve, reject) => {
		clientContext.load(group)
		clientContext.executeQueryAsync(
			() => {
				console.log(`group succeeded`, group)
				resolve()
			},
			() => {
				console.log(`group failed`, group)
			}
		)
	})

	//--------------------------------------------------------
	// 	let siteId = "43a95d9c-69fd-48bd-a03e-01512dbed271"
	// 	let endPoint
	// 	let method = 'post'
	// 	let body = `<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="15.0.0.0" ApplicationName=".NET Library" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
	// 	<Actions>
	// 	  <SetProperty Id="1" ObjectPathId="2" Name="Owner">
	// 		<Parameter ObjectPathId="3" />
	// 	  </SetProperty>
	// 	  <Method Name="Update" Id="4" ObjectPathId="2" />
	// 	</Actions>
	// 	<ObjectPaths>
	// 	  <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteId}:g:${groupId}" />
	// 	  <Identity Id="3" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteId}:g:${ownerGroupId}" />
	// 	</ObjectPaths>
	//   </Request>`

	// 	// {
	// 	// 	__metadata: {
	// 	// 		type: 'SP.Group',
	// 	// 	},
	// 	// 	Owner: {
	// 	// 		Id: ownerGroupId,
	// 	// 		PrincipalType: 1,
	// 	// 	},
	// 	// }

	// 	if (!ownerGroupId) {
	// 		return Promise.reject('ChangeGroupOwner requires newOwnerGroupId')
	// 	} else {
	// 		if (!groupId) {
	// 			if (!groupName) {
	// 				return Promise.reject(
	// 					'ChangeGroupOwner requires groupId or groupName'
	// 				)
	// 			} else {
	// 				endPoint = `/_api/web/SiteGroups/getByName('${groupName}')`
	// 			}
	// 		} else {
	// 			// endPoint = `/_api/web/SiteGroups(${groupId})/owner`
	// 			endPoint = `/_vti_bin/client.svc/ProcessQuery`
	// 		}
	// 	}

	// 	return new Promise((resolve, reject) => {
	// 		GetContextWebInformation(url).then((response) => {
	// 			const headers = {
	// 				accept: 'application/json; odata=verbose',
	// 				'content-type': 'text/xml',
	// 				'x-requestdigest': response.FormDigestValue,
	// 			}
	// 			RestCall({
	// 				url: url,
	// 				endPoint: endPoint,
	// 				method: method,
	// 				body: body,
	// 				headers: headers,
	// 			})
	// 				.then((response) => {
	// 					resolve(response)
	// 				})
	// 				.catch((response) => {
	// 					reject(response)
	// 				})
	// 		})
	// 	})
}
