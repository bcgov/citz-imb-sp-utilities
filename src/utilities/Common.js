export const RestCall = ({ url, endPoint, method = 'get', body = '', headers }) => {
    let options = { method: method }


    if (typeof body !== "string") options.body = JSON.stringify(body)

    if (headers) options.headers = headers

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`, options)
            .then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    console.groupCollapsed('--RestCall Details')
                    console.warn(`url: '${url}'`)
                    console.warn(`endPoint: '${endPoint}'`)
                    console.warn(`method: '${method}'`)
                    console.warn(`body:`, body)
                    console.warn(`headers:`, headers)
                    console.warn(`results: ${response.status} ${response.statusText}`)
                    console.groupEnd()
                    reject(`${response.status} ${response.statusText}`)
                }
            })
    })
}