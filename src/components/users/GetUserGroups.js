import { RestCall } from 'components/common/RestCall'

export const GetUserGroups = ({ baseurl = '', userId }) => {
	let endPoint

	if (!userId) {
		return new Promise((resolve, reject) => {
			reject('GetUserGroups requires userId')
		})
	} else {
		endPoint = `/_api/web/GetUserById(${userId})/Groups`
	}

	return new Promise((resolve, reject) => {
        RestCall({ url: baseurl, endPoint: endPoint })
        .then((response) => {
            resolve(response.d)
        })
        .catch((response) => {
            reject(`GetUserGroups::${response}`)
        })
	})
}
