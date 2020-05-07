import { RestCall } from '../common/RestCall'
import { GetList } from './GetList'

export const AddItemsToList = ({ baseurl = '', listName, listGUID, items }) => {
	let endPoint

	if (!items) {
		return new Promise((resolve, reject) => {
			reject('AddItemsToList requires items')
		})
	} else {
		if (!Array.isArray(items)) {
			items = [items]
		}
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('AddItemsToList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/items`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/items`
	}

	return new Promise((resolve, reject) => {
		let fetches = []

		Promise.all([
			GetList({ url: baseurl, listName, listGUID }),
			GetFormDigestValue(),
		]).then((response) => {
			for (let i = 0; i < items.length; i++) {
				items[i].__metadata = {
					type: response[0].ListItemEntityTypeFullName,
				}
				fetches.push(
					RestCall({
						url: baseurl,
						endPoint: endPoint,
						method: 'post',
						body: items[i],
						headers: {
							'x-requestdigest': response[1],
							accept: 'application/json; odata=verbose',
							'content-type': 'application/json; odata=verbose',
						},
					})
				)
			}

			Promise.all(fetches)
				.then((response) => {
					resolve(
						response.map((item) => {
							return item.d
						})
					)
				})
				.catch((response) => {
					reject(`AddItemsToList::${response}`)
				})
		})
	})
}
