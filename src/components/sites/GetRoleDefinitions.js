import { RestCall } from '../common/RestCall'

export const GetRoleDefinitions = ({ baseurl = '' }) => {
	let endPoint = `/_api/web/RoleDefinitions`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
                let obj = {}
                for(let i=0;i<response.d.results.length;i++){
                    obj[response.d.results[i].Name] = response.d.results[i]
                }
				resolve(obj)
			})
			.catch((response) => {
				reject(`GetRoleDefinitions::${response}`)
			})
	})
}
