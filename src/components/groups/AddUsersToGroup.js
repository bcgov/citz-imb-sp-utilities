import { RestCall } from 'Components'

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
				reject(`AddUsersToGroup::${response}`)
			})
	})
}