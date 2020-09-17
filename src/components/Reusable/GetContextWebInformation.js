export const GetContextWebInformation = (baseurl = '') => {
	if (baseurl === '') {
		if (typeof _spPageContextInfo === 'undefined') {
			return Promise.reject(
				'GetContextWebInformation:: _spPageContextInfo is not defined'
			)
		} else {
			// eslint-disable-next-line
			baseurl = _spPageContextInfo.siteAbsoluteUrl
		}
	}
	return new Promise((resolve, reject) => {
		fetch(`${baseurl}/_api/contextinfo`, {
			method: 'post',
			headers: {
				Accept: 'application/json;odata=verbose',
				'content-type': 'application/json;odata=verbose',
			},
		})
			.then((response) => {
				if (response.ok) {
					response
						.json()
						.then((data) => {
							resolve(data.d.GetContextWebInformation)
						})
						.catch((err) => {
							console.log(err)
						})
				} else {
					reject(
						`GetContextWebInformation::${response.status} ${response.statusText}`
					)
				}
			})
			.catch((response) => {
				reject(`GetContextWebInformation::${response}`)
			})
	})
}
