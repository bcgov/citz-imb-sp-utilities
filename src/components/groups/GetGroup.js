import { RestCall } from '../common/RestCall'

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
				reject(`GetGroup::${response}`)
			})
	})
}