import { RestCall } from '../common/RestCall'

export const SendEmail = ({
	baseurl = '',
	to,
	cc = [],
	bcc = [],
	subject,
	body,
}) => {
    if (!to) {
		return new Promise((resolve, reject) => {
			reject('SendEmail requires to')
		})
    }
    if (!subject) {
		return new Promise((resolve, reject) => {
			reject('SendEmail requires subject')
		})
    }
    if (!body) {
		return new Promise((resolve, reject) => {
			reject('SendEmail requires body')
		})
    }

	const restbody = {
		properties: {
			__metadata: {
				type: 'SP.Utilities.EmailProperties',
			},
			To: {
				results: to,
			},
			Body: body,
			Subject: subject,
			CC: {
				results: cc,
			},
			BCC: {
				results: bcc,
			},
		},
	}
	const endPoint = '/_api/SP.Utilities.Utility.SendEmail'

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint: endPoint,
			method: 'post',
			body: restbody,
			headers: headers,
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`SendEmail::${response}`)
			})
	})
}
