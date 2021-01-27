import { RestCall } from '../../Components'

export const GetUserByEmail = ({ baseurl = '', email }) => {
	let endPoint

	if (!email) {
		return new Promise((resolve, reject) => {
			reject('GetUserByEmail requires email')
		})
	} else {
		endPoint = `/_api/web/SiteUsers?$select=id,title,email,LoginName&$filter=Email eq '${email}'`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
        .then((response) => {
            if(response.d.results.length === 0){
                console.warn('GetUserByEmail returned no users; remember that email address capitalization counts')
            }
            resolve(response.d.results)
        })
        .catch((response) => {
            reject(`GetUser::${response}`)
        })
	})
}