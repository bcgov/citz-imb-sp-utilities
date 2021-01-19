import { RestCall } from '../../Components'

export const CreateView = ({
	baseurl = '',
	listName,
	listGUID,
    viewQuery,
    viewName,
    PersonalView = false
}) => {
    let endPoint

	if (!listGUID) {
		if (!listName) {
			return new Promise((resolve, reject) => {
				reject('CreateView requires listGUID or listName')
			})
		} else {
			endPoint = `/_api/web/Lists/getByTitle('${listName}')/views`
		}
	} else {
		endPoint = `/_api/web/Lists('${listGUID}')/views`
	}
    if (!viewName) {
		return new Promise((resolve, reject) => {
			reject('CreateView requires viewName')
		})
    }

    let body = {
		__metadata: {
			type: 'SP.View',
        },
		PersonalView,
        Title: viewName,
    }

    if(viewQuery) body.viewQuery = viewQuery

	return new Promise((resolve, reject) => {
		RestCall({
			url: baseurl,
			endPoint,
            method: 'post',
            body
		})
			.then((response) => {
				resolve(response.d)
			})
			.catch((response) => {
				reject(`CreateView::${response}`)
			})
	})
}
