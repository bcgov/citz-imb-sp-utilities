import { RestCall } from 'Components'

export const GetGroupMembers = ({ baseurl = '', groupId, groupName }) => {
	let endPoint

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'GetGroupMembers requires groupId or groupName'
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
				reject(`GetGroupMembers::${response}`)
			})
	})
}
