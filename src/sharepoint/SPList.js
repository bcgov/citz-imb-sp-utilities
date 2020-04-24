import React, { useState, useEffect, forwardRef } from 'react'
import { GetList } from '../components/Lists'
import MaterialTable from 'material-table'
import Moment from 'react-moment'

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

export function SPList({
	baseurl,
	listName,
	listGUID,
	options,
	addItem = true,
	deleteItem = true,
	editItem = true,
	changeItemPermissions = true,
	customActions,
}) {
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

	const calendarStrings = {
		lastDay: '[Yesterday at] LT',
		sameDay: '[Today at] LT',
		nextDay: '[Tomorrow at] LT',
		lastWeek: '[last] dddd [at] LT',
		nextWeek: 'dddd [at] LT',
		sameElse: 'L',
	}

	const [listItems, setListItems] = useState([])
	const [listFields, setListFields] = useState()
	const [viewColumns, setViewColumns] = useState([])
	const [list, setList] = useState({})
	const [actions, setActions] = useState([])

    const getUserJSX = (rowdata) =>{
        //console.log(`rowdata`,rowdata)
    }

	useEffect(() => {
		GetList({
			baseurl: baseurl,
			listName: listName,
			listGUID: listGUID,
			expand: 'DefaultView,DefaultView/ViewFields,Fields,Items',
		}).then((response) => {
			setList(response)

			let fields = {}
			for (let i = 0; i < response.Fields.results.length; i++) {
				fields[response.Fields.results[i].InternalName] =
					response.Fields.results[i]
			}
			setListFields(fields)
console.log(`response.Items.results`,response.Items.results)
			setListItems(
				response.Items.results.map((item) => {
					item.LinkTitleNoMenu = item.Title
					item.LinkTitle = item.Title
					item.Url = item.__metadata.uri
					return item
				})
			)
		})

		if (addItem) {
			setActions((prevActions) => {
				prevActions.push({
					icon: icons.Add,
					tooltip: 'Add Item',
					isFreeAction: true,
					onClick: (event, rowdata) => {
						//todo: setAddDialog(true)
					},
				})

				return prevActions
			})
		}

		if (deleteItem) {
			setActions((prevActions) => {
				prevActions.push({
					icon: icons.Delete,
					tooltip: 'Delete Item',
					onClick: (event, rowdata) => {
						//TODO: delete item actions
					},
				})

				return prevActions
			})
		}

		if (editItem) {
			setActions((prevActions) => {
				prevActions.push({
					icon: icons.Edit,
					tooltip: 'Edit Item',
					onClick: (event, rowdata) => {
						//TODO: edit item actions
					},
				})

				return prevActions
			})
		}

		if (changeItemPermissions) {
			setActions((prevActions) => {
				prevActions.push({
					icon: icons.People,
					tooltip: 'Change Item Permissions',
					onClick: (event, rowdata) => {
						//TODO: change item permissions actions
					},
				})

				return prevActions
			})
		}

		if (customActions) {
			customActions.map((action, index) => {
				action.icon = icons[action.icon]

				return setActions((prevActions) => {
					prevActions.push(action)
					return prevActions
				})
			})
		}

		return () => {}
	}, [])

	useEffect(() => {
		if (list.DefaultView && listFields) {
			setViewColumns(
				list.DefaultView.ViewFields.Items.results.map((field) => {
					console.log(`listFields[${field}]`, listFields[field])
					let fieldObject = {
						title: listFields[field].Title,
						field: field,
					}

					switch (listFields[field].TypeAsString) {
						case 'DateTime':
							fieldObject.render = (rowdata) => {
                                console.log(`rowdata`,rowdata[field])
                                const validDateTime = moment(rowdata[field]).isValid()
								return (
                                    {validDateTime ?
                                        (<Moment calendar={calendarStrings} format="YYYY-MMM-DD hh:mm">
                                    {rowdata[field]}
                                </Moment>)
                                 : ''}


								)
							}
							break
						case 'UserMulti':
                            fieldObject.render = (rowdata) => {
								return getUserJSX(rowdata)
							}
							break
					}

					if (field === 'LinkTitleNoMenu') {
						fieldObject.render = (rowdata) => {
							return <a href={rowdata['Url']}>{rowdata[field]}</a>
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

		return () => {}
	}, [list, listFields])

	return (
		<MaterialTable
			actions={actions}
			icons={icons}
			data={listItems}
			title={list.Title}
			columns={viewColumns}
			options={options}
		/>
	)
}
