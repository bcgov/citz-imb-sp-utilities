import { RestCall } from 'components/common/RestCall'

export const GetAssociatedGroups = (baseurl = '') => {
	return new Promise((resolve, reject) => {
		Promise.all([
			RestCall({ url: baseurl, endPoint: `/_api/Web/AssociatedOwnerGroup` }),
			RestCall({ url: baseurl, endPoint: `/_api/Web/AssociatedMemberGroup` }),
			RestCall({
				url: baseurl,
				endPoint: `/_api/Web/AssociatedVisitorGroup`,
			}),
		])
			.then((response) => {
				resolve({
					AssociatedOwnerGroup: response[0].d,
					AssociatedMemberGroup: response[1].d,
					AssociatedVisitorGroup: response[2].d,
				})
			})
			.catch((response) => {
				reject(`GetAssociatedGroups::${response}`)
			})
	})
}