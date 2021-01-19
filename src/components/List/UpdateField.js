import { RestCall } from 'citz-imb-sp-utilities/dist/js/Components'

export const UpdateField = ({ baseurl = '', listName, listGUID, fieldName, field }) => {
	let endPoint

	if (!field) {
		return new Promise((resolve, reject) => {
			reject('UpdateField requires field')
		})
	}

	if (!fieldName) {
		return new Promise((resolve, reject) => {
			reject('UpdateField requires fieldName')
		})
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('AddFieldToList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/fields/getByTitle('${fieldName}')`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/fields/getByTitle('${fieldName}')`
	}

	return new Promise((resolve, reject) => {
				field.__metadata = {
					type: 'SP.FieldText',
				}

			RestCall({
				url: baseurl,
				endPoint: endPoint,
				method: 'patch',
				body: field,
			}).then((response) => {
					resolve()
				})
				.catch((response) => {
					reject(`UpdateField::${response}`)
				})
	})
}
