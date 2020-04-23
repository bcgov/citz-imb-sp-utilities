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
		fetch(`${baseurl}${endPoint}`)
			.then((results) => {
				if (results.ok) {
					return results.json()
				} else {
					const msg = `error: ${results.status} ${results.statusText}`
					reject(new error(msg))
				}
			})
			.then((data) => {
				resolve(data.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}

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
		fetch(`${baseurl}${endPoint}`)
			.then((results) => {
				if (results.ok) {
					return results.json()
				} else {
					const msg = `error: ${results.status} ${results.statusText}`
					reject(new error(msg))
				}
			})
			.then((data) => {
				resolve(data.d)
			})
			.catch((response) => {
				reject(response)
			})
	})
}
