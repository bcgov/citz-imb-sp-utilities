import { RestCall } from '../utilities/Common'

export const GetContextWebInformation = (url = '') => {
    console.log('--GetContextWebInformation')
    return new Promise((resolve, reject) => {
        RestCall({ url: url, endPoint: '/_api/contextinfo', method: 'post' })
            .then(response => {
                resolve(response.d.GetContextWebInformation)
            })
    })
}

export const GetFormDigestValue = url => {
    console.log('--GetFormDigestValue')
    return new Promise((resolve, reject) => {
        GetContextWebInformation(url)
            .then(response => {
                resolve(response.FormDigestValue)
            })
    })
}

export const GetCurrentUser = (url = '') => {
    console.log('--GetCurrentUser')
    return new Promise((resolve, reject) => {
        RestCall({ url: url, endPoint: '/_api/web/CurrentUser'})
            .then(response => {
                resolve(response.d)
            })
    })
}