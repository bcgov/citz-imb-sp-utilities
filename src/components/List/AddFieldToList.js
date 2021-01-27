import { RestCall } from '../../Components'

export const AddFieldToList = ({ baseurl = '', listName, listGUID, field }) => {
	let endPoint

	if (!field) {
		return new Promise((resolve, reject) => {
			reject('AddFieldToList requires field')
		})
	} else {
		if (!Array.isArray(field)) {
			field = [field]
		}
	}

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('AddFieldToList requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/fields`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/fields`
	}

	const awaitAll = async(field)=>{
		let results = []
		for (let i = 0; i < field.length; i++) {
			field[i].__metadata = {
				type: 'SP.FieldText',
			}
				const result = await RestCall({
					url: baseurl,
					endPoint: endPoint,
					method: 'post',
					body: field[i],
				})

				results.push(result.d)
		}

		return results

	}

	return new Promise((resolve, reject) => {

		awaitAll(field).then(results=>{
	console.log('results :>> ', results);
	resolve(results)
}).catch((response) => {
					reject(`AddFieldToList::${response}`)
				})
	})
}
