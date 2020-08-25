import { RestCall } from 'Components'

export const GetSite = ({baseurl = '', expand = ''}) => {
	let endPoint = `/_api/web`
	let parameters = []

	if (expand) {
		parameters.push(`$expand=${expand}`)
	}

	if (parameters.length) {
		endPoint += `?${parameters.join('&')}`
	}

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`GetSite::${response}`)
			})
	})
}

export default GetSite