import { GetFormDigestValue } from './ContextInfo'
import { RestCall } from '../utilities/Common'

export const GetGroup = ({ url = '', groupId, groupName }) => {
    console.log('--GetFormDigestValue')
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
        RestCall({ url: url, endPoint: endPoint })
            .then(response => {
                resolve(response.d)
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
        RestCall({ url: url, endPoint: endPoint })
            .then(response => {
                resolve(response.d.results)
            })
    })
}

export const AddUsersToGroup = ({ url = '', groupId, groupName, loginName }) => {
    let endPoint

    if (!loginName) {
        return new Promise((resolve, reject) => { reject("AddUsersToGroup requires loginName") })
    } else {
        if (!Array.isArray(loginName)) {
            loginName = [loginName]
        }
    }

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("AddUsersToGroup requires GroupId or GroupName") })
        } else {
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users(${LoginName})`
        }
    } else {
        endPoint = `/_api/web/SiteGroups(${groupId})/Users`
    }

    return new Promise((resolve, reject) => {
        let fetches = []

        for (let i = 0; i < loginName.length; i++) {
            fetches.push(
                RestCall({
                    url: url,
                    endPoint: endPoint,
                    method: 'post',
                    body: {
                        "__metadata": {
                            "type": "SP.User"
                        },
                        "LoginName": loginName[i]
                    },
                    headers: {
                        "accept": "application/json; odata=verbose",
                        "content-type": "application/json; odata=verbose"
                    }
                })
            )
        }

        Promise
            .all(fetches)
            .then(data => {
                resolve(data.map(user => {
                    return user.d
                }))
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const RemoveUsersFromGroup = ({ url = '', groupId, groupName, loginName, userId }) => {
    let endPoint

    if (!groupId) {
        if (!groupName) {
            return new Promise((resolve, reject) => { reject("RemoveUsersFromGroup requires GroupId or GroupName") })
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
            if (!Array.isArray(userId)) {
                userId = [userId]
            }
        }
    } else {
        if (!Array.isArray(loginName)) {
            userId = [loginName]
        }
    }

    return new Promise((resolve, reject) => {
        GetFormDigestValue(url).then(digestValue => {

            let fetches = []

            if (loginName) {
                for (let i = 0; i < loginName.length; i++) {
                    fetches.push(
                        RestCall({
                            url: url,
                            endPoint: `${endPoint}/removeByLoginName('${loginName[i]}')`,
                            method: 'post',
                            headers: {
                                "x-requestdigest": digestValue,
                                "accept": "application/json; odata=verbose",
                                "content-type": "application/json; odata=verbose"
                            }
                        })
                    )
                }
            } else {
                for (let i = 0; i < userId.length; i++) {
                    fetches.push(
                        RestCall({
                            url: url,
                            endPoint: `${endPoint}/removeByID(${userId[i]})`,
                            method: 'post',
                            headers: {
                                "x-requestdigest": digestValue,
                                "accept": "application/json; odata=verbose",
                                "content-type": "application/json; odata=verbose"
                            }
                        })
                    )
                }
            }

            Promise
                .all(fetches)
                .then(data => {
                    resolve(data.map(user => {
                        return user.d
                    }))
                })
                .catch(error => {
                    reject(error)
                })
        })
    })
}