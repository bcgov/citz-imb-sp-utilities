export const GetContextWebInformation = url => {
    return new Promise((resolve, reject) => {
        fetch(`${url}/_api/contextinfo`, {method: 'POST'})
            .then(results => {
                return results.json()
            })
            .then(data => {
                resolve(data.d.GetContextWebInformation)
            })
            .catch(error => {
                resolve(error)
            })
    })
}

export const GetFormDigestValue = url => {
    return new Promise((resolve, reject) => {
        fetch(`${url}/_api/contextinfo`, {method: 'POST'})
            .then(results => {
                return results.json()
            })
            .then(data => {
                resolve(data.d.GetContextWebInformation.FormDigestValue)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default GetContextWebInformation