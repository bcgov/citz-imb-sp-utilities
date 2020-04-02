import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const GetList = ({ url = '', listName, listGUID }) => {
    let endPoint

    if (!listGUID) {
        if (!listName) {
            return new Promise((resolve, reject) => { reject("GetList requires listGUID or listName") })
        } else {
            endPoint = `/_api/web/Lists/getByTitle('${listName}')`
        }
    } else {
        endPoint = `/_api/web/Lists('${listGUID}')`
    }

    return new Promise((resolve, reject) => {
        RestCall({ url: url, endPoint: endPoint })
            .then(response => {
                resolve(response.d)
            })
    })
}

export const GetListItems = ({ url = '', listName, listGUID }) => {
    let endPoint

    if (!listGUID) {
        if (!listName) {
            return new Promise((resolve, reject) => { reject("GetList requires listGUID or listName") })
        } else {
            endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
        }
    } else {
        endPoint = `/_api/web/Lists('${listGUID}')/items`
    }

    return new Promise((resolve, reject) => {
        RestCall({ url: url, endPoint: endPoint })
            .then(response => {
                resolve(response.d.results)
            })
    })
}

export const AddItemsToList = ({ url = '', listName, listGUID, items }) => {
    let endPoint

    if (!items) {
        return new Promise((resolve, reject) => { reject("AddItemsToList requires items") })
    } else {
        if (!Array.isArray(items)) {
            items = [items]
        }
    }

    if (!listGUID) {
        if (!listName) {
            return new Promise((resolve, reject) => { reject("AddItemsToList requires listGUID or listName") })
        } else {
            endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
        }
    } else {
        endPoint = `/_api/web/Lists('${listGUID}')/items`
    }

    return new Promise((resolve, reject) => {
        let fetches = []

        Promise.all([
            GetList({ url, listName, listGUID }),
            GetFormDigestValue()
        ])
            .then(response => {
                for (let i = 0; i < items.length; i++) {
                    items[i].__metadata = {
                        "type": response[0].ListItemEntityTypeFullName
                    }
                    fetches.push(
                        RestCall({
                            url: url,
                            endPoint: endPoint,
                            method: 'post',
                            body: items[i],
                            headers: {
                                "x-requestdigest": response[1],
                                "accept": "application/json; odata=verbose",
                                "content-type": "application/json; odata=verbose"
                            }
                        })
                    )
                }

                Promise
                    .all(fetches)
                    .then(response => {
                        resolve(response.map(item => {
                            return item.d
                        }))
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
    })
}

export const RemoveItemsFromList = ({ url = '', listName, listGUID, itemIds }) => {
    let endPoint

    if (!itemIds) {
        return new Promise((resolve, reject) => { reject("RemoveItemsFromList requires items") })
    } else {
        if (!Array.isArray(itemIds)) {
            itemIds = [itemIds]
        }
    }

    if (!listGUID) {
        if (!listName) {
            return new Promise((resolve, reject) => { reject("RemoveItemsFromList requires listGUID or listName") })
        } else {
            endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
        }
    } else {
        endPoint = `/_api/web/Lists('${listGUID}')/items`
    }

    return new Promise((resolve, reject) => {
        let fetches = []

        for (let i = 0; i < itemIds.length; i++) {
            fetches.push(
                RestCall({
                    url: url,
                    endPoint: `${endPoint}(${itemIds[i]})/recycle`,
                    method: 'post',
                    headers: {
                        "x-http-method": "delete",
                        "if-match": "*"
                    }
                })
            )
        }

        Promise
            .all(fetches)
            .then(response => {
                resolve(response.map(item => {
                    return item.d
                }))
            })
            .catch(error => {
                reject(error)
            })
    })
}