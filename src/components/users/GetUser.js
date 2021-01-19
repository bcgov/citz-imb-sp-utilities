import { RestCall } from '../../Components'

export const GetUser = ({ baseurl = '', userId }) => {
	let endPoint

	if (!userId) {
		return new Promise((resolve, reject) => {
			reject('GetUser requires userId')
		})
	} else {
		endPoint = `/_api/web/GetUserById(${userId})`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
        .then((response) => {
            resolve(response.d)
        })
        .catch((response) => {
            reject(`GetUser::${response}`)
        })
	})
}