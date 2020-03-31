export const GetUser = ({ url = '', userId }) => {
    let endPoint

    if (!userId) {
        return new Promise((resolve, reject) => { reject("GetUser requires userId") })
    } else {
        endPoint = `/_api/web/GetUserById(${userId})`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`)
            .then(results => {
                if (results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetUser results', msg)
                    console.log(results)
                    console.groupEnd()
                    reject(new error(msg))
                }
            })
            .then(data => {
                resolve(data.d)
            })
            .catch(error => {
                resolve(error)
            })
    })
}

export const GetUserGroups = ({ url = '', userId }) => {
    console.log("GetUserGroups", userId)
    let endPoint

    if (!userId) {
        return new Promise((resolve, reject) => { reject("GetUserGroups requires userId") })
    } else {
        endPoint = `/_api/web/GetUserById(${userId})/Groups`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`)
            .then(results => {
                console.log(results)
                if (results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetUserGroups results', msg)
                    console.log(results)
                    console.groupEnd()
                    reject(new error(msg))
                }
            })
            .then(data => {
                resolve(data.d)
            })
            .catch(error => {
                resolve(error)
            })
    })
}