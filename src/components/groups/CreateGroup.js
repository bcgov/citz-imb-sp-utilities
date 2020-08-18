import { RestCall } from 'components/common/RestCall'

export const CreateGroup = ({
	baseurl = '',
	groupName,
	groupDescription = '',
}) => {
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
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: method,
			body: body,
			//headers: headers,
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`CreateGroup::${response}`)
			})
	})
}
