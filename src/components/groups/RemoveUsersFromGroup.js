import { RestCall } from '../common/RestCall'

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
		let fetches = []

		if (loginName) {
			for (let i = 0; i < loginName.length; i++) {
				fetches.push(
					RestCall({
						url: baseurl,
						endPoint: `${endPoint}/removeByLoginName('${loginName[i]}')`,
						method: 'post',
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
				reject(`RemoveUsersFromGroup::${response}`)
			})
	})
}
