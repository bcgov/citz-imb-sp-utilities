import { RestCall } from '../utilities/Common'
import { GetFormDigestValue } from './ContextInfo'

export const BreakInheritanceOnList = ({
	url = '',
	listName,
	listGUID,
	copy = true,
	clear = false,
}) => {
	let endPoint
	let method = 'post'

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('BreakInheritanceOnList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/breakroleinheritance(copyRoleAssignments=${copy},clearSubscopes=${clear})`
	}

	return new Promise((resolve, reject) => {
		GetFormDigestValue(url).then((formDigestValue) => {
			let headers = {
				'x-requestdigest': formDigestValue,
			}

			RestCall({
				url: url,
				endPoint: endPoint,
				method: method,
				headers: headers,
			})
				.then((response) => {
					resolve(response.d)
				})
				.catch((response) => {
					reject(response)
				})
		})
	})
}
