import React, { useState, useEffect, forwardRef } from 'react'
import {
	GetList,
	GetListFields,
	GetListDefaultView,
	GetListItems,
} from '../components/Lists'
import MaterialTable from 'material-table'

import Add from '@material-ui/icons/Add'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import PeopleIcon from '@material-ui/icons/People'

export function SPList({ baseurl, listName, listGUID, options }) {
	const icons = {
		People: forwardRef((props, ref) => <PeopleIcon {...props} ref={ref} />),
		Question: forwardRef((props, ref) => (
			<QuestionAnswerIcon {...props} ref={ref} />
		)),
		Library: forwardRef((props, ref) => (
			<LibraryBooksIcon {...props} ref={ref} />
		)),
		Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
		AddBox: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
		Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
		Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Delete: forwardRef((props, ref) => (
			<DeleteOutline {...props} ref={ref} />
		)),
		DetailPanel: forwardRef((props, ref) => (
			<ChevronRight {...props} ref={ref} />
		)),
		Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
		Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
		Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
		FirstPage: forwardRef((props, ref) => (
			<FirstPage {...props} ref={ref} />
		)),
		LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
		NextPage: forwardRef((props, ref) => (
			<ChevronRight {...props} ref={ref} />
		)),
		NotInterested: forwardRef((props, ref) => (
			<NotInterestedIcon {...props} ref={ref} />
		)),
		PreviousPage: forwardRef((props, ref) => (
			<ChevronLeft {...props} ref={ref} />
		)),
		ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
		SortArrow: forwardRef((props, ref) => (
			<ArrowDownward {...props} ref={ref} />
		)),
		ThirdStateCheck: forwardRef((props, ref) => (
			<Remove {...props} ref={ref} />
		)),
		ViewColumn: forwardRef((props, ref) => (
			<ViewColumn {...props} ref={ref} />
		)),
	}

	const [listItems, setListItems] = useState([])
	const [listColumns, setListColumns] = useState({})
	const [viewColumns, setViewColumns] = useState([])
	const [list, setList] = useState({})

	const refreshData = () => {
		if (list.BaseTemplate === 101) {
			GetListItems({
				baseurl: baseurl,
				listGUID: listGUID,
				listName: listName,
				expand: 'File',
			}).then((response) => {
				response.map((item) => {
					item.LinkFilenameNoMenu = item.File.Name
					item.LinkFilename = item.File.Name
					item.FileLeafRef = item.File.Name
					item.Url = item.OData__dlc_DocIdUrl.Url
					return item
				})
				setListItems(response)
			})
		} else {
			GetListItems({
				baseurl: baseurl,
				listGUID: listGUID,
				listName: listName,
			}).then((response) => {
				response.map((item) => {
					item.LinkTitleNoMenu = item.Title
					item.LinkTitle = item.Title
					item.Url = item.__metadata.uri
					return item
				})
				setListItems(response)
			})
		}
	}

	useEffect(() => {
		Promise.all([
			GetList({ baseurl, listName, listGUID }),
			GetListFields({ baseurl, listName, listGUID }),
		]).then(([listResponse, listFieldsResponse]) => {
			setList(listResponse)

			let columns = {}
			for (let i = 0; i < listFieldsResponse.length; i++) {
				columns[listFieldsResponse[i].InternalName] =
					listFieldsResponse[i].Title
			}
			setListColumns(columns)
		})

		return () => {}
	}, [])

	useEffect(() => {
		GetListDefaultView({ baseurl, listName, listGUID }).then(
			(listViewResponse) => {
				setViewColumns(
					listViewResponse.ViewFields.Items.results.map((field) => {
						let fieldObject = {
							title: listColumns[field],
							field: field,
						}

						if (field === 'LinkFilenameNoMenu') {
							fieldObject.render = (rowdata) => {
								return (
									<a href={rowdata['Url']}>
										{rowdata[field]}
									</a>
								)
							}
						}
						if (field === 'LinkFilename') {
							fieldObject.render = (rowdata) => {
								return (
									<a href={rowdata['Url']}>
										{rowdata[field]} - edit
									</a>
								)
								//TODO: make edit dropdown
							}
						}
						if (field === 'LinkTitleNoMenu') {
							fieldObject.render = (rowdata) => {
								return (
									<a href={rowdata['Url']}>
										{rowdata[field]}
									</a>
								)
							}
						}
						if (field === 'LinkTitle') {
							fieldObject.render = (rowdata) => {
								return (
									<a href={rowdata['Url']}>
										{rowdata[field]} - edit
									</a>
								)
								//TODO: make edit dropdown
							}
						}

						return fieldObject
					})
				)
			}
		)
		refreshData()

		return () => {}
	}, [listColumns])

    //TODO: addItem
    //TODO: removeItem
    //TODO: editItem
    //TODO: changeItemPermissions
    //TODO: customActions

	return (
		<MaterialTable
			icons={icons}
			data={listItems}
			title={list.Title}
            columns={viewColumns}
            options={options}
		/>
	)
}
