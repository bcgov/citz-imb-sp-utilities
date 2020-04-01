import { GetFormDigestValue } from './ContextInfo'

export const GetGroup = ({ url = '', groupId, groupName }) => {
    let endPoint

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("GetGroup requires GroupId or GroupName") })
        } else {
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')`
        }
    } else {
        endPoint = `/_api/web/SiteGroups(${groupId})`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`)
            .then(results => {
                if (results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetGroup results', msg)
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

export const GetGroupMembers = ({ url = '', groupId, groupName }) => {
    let endPoint

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("GetGroupMembers requires GroupId or GroupName") })
        } else {
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users`
        }
    } else {
        endPoint = `/_api/web/SiteGroups(${groupId})/Users`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`)
            .then(results => {
                if (results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetGroupMembers results', msg)
                    console.log(results)
                    console.groupEnd()
                    reject(new error(msg))
                }
            })
            .then(data => {
                resolve(data.d.results)
            })
            .catch(error => {
                resolve(error)
            })
    })
}

export const AddUserToGroup = ({ url = '', groupId, groupName, loginName }) => {
    console.log("AddUserToGroup", url, groupId, groupName, loginName)
    let endPoint

    if (!loginName) {
        return new Promise((resolve, reject) => { reject("AddUserToGroup requires loginName") })
    }

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("AddUserToGroup requires GroupId or GroupName") })
        } else {
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users(${LoginName})`
        }
    } else {
        endPoint = `/_api/web/SiteGroups(${groupId})/Users`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`, {
            method: 'post',
            body: JSON.stringify({
                "__metadata": {
                    "type": "SP.User"
                },
                "LoginName": loginName
            }),
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json; odata=verbose"
            }
        })
            .then(results => {
                console.log('AddUserToGroup results', results.json())
                if (results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetGroup results', msg)
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

export const RemoveUserFromGroup = ({ url='', groupId, groupName, loginName, userId }) => {
    console.log("RemoveUserFromGroup", url, groupId, groupName, loginName)
    let endPoint

    if (!loginName) {
        return new Promise((resolve, reject) => { reject("RemoveUserFromGroup requires loginName") })
    }

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("RemoveUserFromGroup requires GroupId or GroupName") })
        } else {
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users`
        }
    } else {
        endPoint = `/_api/web/SiteGroups(${groupId})/Users`
    }

    if (!loginName) {
        if (!userId) {
            return new Promise((resolve, reject) => { reject("RemoveUserFromGroup requires userId or logonName") })
        } else {
            endPoint += `/removeByID(${userId})`
        }
    } else {
        endPoint += `/removeByLoginName('${loginName}')`
    }

    console.log("endPoint", endPoint)

    return new Promise((resolve, reject) => {
        GetFormDigestValue(url).then(digestValue => {
            fetch(`${url}${endPoint}`, {
                method: 'post',
                headers: {
                    "x-requestdigest": digestValue,
                    "accept": "application/json; odata=verbose",
                    "content-type": "application/json; odata=verbose"
                }
            })
                .then(results => {
                    console.log('RemoveUserFromGroup results', results.json())
                    if (results.ok) {
                        return results.json()
                    } else {
                        const msg = `error: ${results.status} ${results.statusText}`
                        console.groupCollapsed('GetGroup results', msg)
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
    })
}