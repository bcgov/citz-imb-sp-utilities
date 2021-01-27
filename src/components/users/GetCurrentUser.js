import { RestCall } from '../../Components'

export const GetCurrentUser = ({baseurl = '', expand}) => {
	let endPoint = '/_api/web/CurrentUser'

	if(expand){
		endPoint = `${endPoint}?$expand=${expand}`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetCurrentUser::${response}`)
			})
	})
}
