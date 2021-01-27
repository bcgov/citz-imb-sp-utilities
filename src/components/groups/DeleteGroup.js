import { RestCall } from '../../Components'

export const DeleteGroup = ({ baseurl = '', groupName, groupId }) => {
	let endPoint
	const method = 'post'

    if (!groupId) {
		if (!groupName) {
			return Promise.reject('DeleteGroup requires groupId or groupName')
		} else {
			endPoint = `/_api/web/SiteGroups/removebyloginname('${groupName}')`
		}
	} else {
		endPoint = `/_api/web/SiteGroups/removebyid('${groupId}')`
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
				reject(`DeleteGroup::${response}`)
			})
	})
}
