import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const SendEmail = ({ url = '', to, cc = [], bcc = [], subject, body }) => {
    const restbody = {
        'properties': {
            '__metadata': {
                'type': 'SP.Utilities.EmailProperties'
            },
            'To': {
                'results': to
            },
            'Body': body,
            'Subject': subject,
            'CC': {
                'results': cc
            },
            'BCC': {
                'results': bcc
            }
        }
    }
    const endPoint = '/_api/SP.Utilities.Utility.SendEmail'

    return new Promise((resolve, reject) => {
        GetFormDigestValue(url).then(formDigestValue => {
            const headers = {
                "Accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": formDigestValue
            }
            RestCall({ url: url, endPoint: endPoint, method: 'post', body: restbody, headers: headers })
                .then(response => {
                    resolve(response.d)
                })
        })

    })
}