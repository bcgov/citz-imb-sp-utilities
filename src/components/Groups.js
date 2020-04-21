import { GetFormDigestValue, GetContextWebInformation } from './ContextInfo'
import { RestCall } from '../utilities/Common'

export const GetGroup = ({ baseurl = '', groupId, groupName }) => {
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
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const GetGroupMembers = ({ baseurl = '', groupId, groupName }) => {
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
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.results)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

export const AddUsersToGroup = ({
	baseurl = '',
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
					url: baseurl,
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
	baseurl = '',
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
		GetFormDigestValue(baseurl).then((digestValue) => {
			let fetches = []

			if (loginName) {
				for (let i = 0; i < loginName.length; i++) {
					fetches.push(
						RestCall({
							url: baseurl,
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
							url: baseurl,
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

export const CreateGroup = ({ baseurl = '', groupName, groupDescription = '' }) => {
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
		GetFormDigestValue(baseurl).then((response) => {
			const headers = {
				accept: 'application/json; odata=verbose',
				'content-type': 'application/json; odata=verbose',
				'x-requestdigest': response,
			}
			RestCall({
				url: baseurl,
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

export const GetAssociatedGroups = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		Promise.all([
			RestCall({ url: baseurl, endPoint: `/_api/Web/AssociatedOwnerGroup` }),
			RestCall({ url: baseurl, endPoint: `/_api/Web/AssociatedMemberGroup` }),
			RestCall({
				url: baseurl,
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
	baseurl = '',
	groupId,
	groupName,
	ownerGroupId,
	ownerGroupName,
}) => {
	let clientContext = new SP.ClientContext(
		baseurl
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
		//clientContext.load(group)
		console.log(`ownerGroup`, ownerGroup)
		console.log(`group`, group)
		group.set_owner(ownerGroup)
		group.update()
		clientContext.executeQueryAsync(
			() => {
				console.log(`group succeeded`, group, ownerGroup)
				resolve()
			},
			() => {
				console.log(`group failed`, group)
				reject()
			}
		)
	})
}
