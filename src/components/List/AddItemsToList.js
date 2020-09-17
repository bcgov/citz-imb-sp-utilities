import { RestCall } from 'Components'
import { GetList } from 'Components'

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

		GetList({ url: baseurl, listName, listGUID }).then((response) => {
			for (let i = 0; i < items.length; i++) {
				items[i].__metadata = {
					type: response.ListItemEntityTypeFullName,
				}
				fetches.push(
					RestCall({
						url: baseurl,
						endPoint: endPoint,
						method: 'post',
						body: items[i],
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
