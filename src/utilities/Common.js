export const RestCall = ({ url, endPoint, method = 'get', body, headers }) => {
    console.groupCollapsed('--RestCall')
    console.log(`url: '${url}'`)
    console.log(`endPoint: '${endPoint}'`)
    console.log(`method: '${method}'`)
    console.log(`body:`, body)
    console.log(`headers:`, headers)
    console.groupEnd()

    let options = { method: method }

    if (body) {
        if (typeof body !== "string") options.body = JSON.stringify(body)
    }
    if (headers) options.headers = headers

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`, options)
            .then(response => {
                if (response.ok) {
                    // console.log('---success', response)
                    resolve(response.json())
                } else {
                    console.log('---fail', response)
                    let error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            })
            .catch(error => {
                console.log('---error', error)
                reject(error)
            })
    })
}