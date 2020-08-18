import { RestCall } from '../common/RestCall'

export const Search = ({
	baseurl = '',
	query,
	properties,
	rowlimit = 100,
    trimDuplicates = false,
    sort = 'rank:descending'
}) => {
	if (!query) {
		return Promise.reject('Search requires query')
	}

	let endPointParameters = `?querytext='${query}'&rowlimit=${rowlimit}&trimDuplicates=${trimDuplicates}&sortlist='${sort}'`
	if (properties) endPointParameters += `&selectproperties='${properties}'`

	let endPoint = `/_api/search/query${endPointParameters}`

	return new Promise((resolve, reject) => {
		RestCall({ url: baseurl, endPoint: endPoint })
			.then((response) => {
				resolve(response.d.query)
			})
			.catch((response) => {
				reject(`Search::${response}`)
			})
	})
}
