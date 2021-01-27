import { RestCall } from '../../Components'
import { GetList } from '../../Components'

export const UpdateListItem = ({ baseurl = '', listName, listGUID, items }) => {
	let endPoint

	if (!items) {
		return new Promise((resolve, reject) => {
			reject('UpdateListItem requires items')
		})
	} else {
		if (!Array.isArray(items)) {
			items = [items]
		}
		for (let i = 0; i < items.length; i++) {
			if (!items[i].Id) {
				return new Promise((resolve, reject) => {
					reject('UpdateListItem requires item Id')
				})
			}
		}
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('UpdateListItem requires listGUID or listName')
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
						endPoint: `${endPoint}(${items[i].Id})`,
						method: 'merge',
						body: items[i],
					})
				)
			}

			Promise.all(fetches)
				.then((response) => {
					resolve()
				})
				.catch((response) => {
					reject(`UpdateListItem::${response}`)
				})
		})
	})
}
