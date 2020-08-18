import { RestCall } from 'components/common/RestCall'

export const EnsureUser = ({ baseurl = '', logonName }) => {
    let endPoint

	if (!logonName) {
		return new Promise((resolve, reject) => {
			reject('EnsureUser requires logonName')
		})
	} else {
		endPoint = `/_api/web/ensureUser('${logonName}')`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
        .then((response) => {
            resolve(response.d)
        })
        .catch((response) => {
            reject(`EnsureUser::${response}`)
        })
	})
}
