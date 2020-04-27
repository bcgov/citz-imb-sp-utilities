import React, {
	useState,
	useEffect,
	forwardRef,
	Fragment,
	useReducer,
} from 'react'
import { GetList, GetListItems } from '../components/Lists'
import MaterialTable from 'material-table'
import Moment from 'react-moment'
import moment from 'moment'
import { List, ListItem } from '@material-ui/core'
import { SPFormDialog } from './SPFormDialog'

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

const formInitialState = {
	open: false,
	title: '',
	handleClose: () => {},
	handleSave: () => {},
}

const formReducer = (state, action) => {
	console.log('formReducer', state, action)
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				open: true,
				title: 'Add Item',
				handleClose: () => {

				},
				handleSave: () => {

				},
			}
		default:
			return formInitialState
	}
}

export function SPList({
	baseurl,
	listName,
	listGUID,
	options,
	addItem = true,
	deleteItem = false,
	editItem = false,
	changeItemPermissions = false,
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

	const [list, setList] = useState()
	const [actions, setActions] = useState([])
	const [title, setTitle] = useState('')
	const [viewColumns, setViewColumns] = useState()
	const [listItems, setListItems] = useState()

	const [formState, formDispatch] = useReducer(formReducer, formInitialState)

	useEffect(() => {
		GetList({
			baseurl: baseurl,
			listName: listName,
			listGUID: listGUID,
			expand: 'DefaultView,DefaultView/ViewFields,Fields',
		}).then((response) => {
			setList(response)
		})

		if (addItem) {
			setActions((prevActions) => {
				prevActions.push({
					icon: icons.Add,
					tooltip: 'Add Item',
					isFreeAction: true,
					onClick: (event, rowdata) => {
						console.log('addItem')
						//todo: setAddDialog(true)
						formDispatch({
							type: 'ADD_ITEM',
							handleClose: formDispatch,
							handleSave: formDispatch,
						})
						/*
						AddItemsToList({ listName: list.Title, items: items })
							.then((response) => {
								console.groupCollapsed(
									'AddItemsToList Response'
								)
								console.log(response)
								console.groupEnd()
								setItemIds(() => {
									return response.map((item) => {
										return item.Id
									})
								})
								refreshListItems()
							})
							.catch((response) => {
								console.warn(
									'AddItemsToList rejected',
									response
								)
							})
							*/
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
						console.log('deleteItem')
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
						console.log('editItem')
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
						console.log('changeItemPermissions')
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
		if (list) {
			setTitle(list.Title)

			let fields = {}
			for (let i = 0; i < list.Fields.results.length; i++) {
				fields[list.Fields.results[i].InternalName] =
					list.Fields.results[i]
			}

			setViewColumns(
				list.DefaultView.ViewFields.Items.results.map((field) => {
					let fieldObject = {
						title: fields[field].Title,
						field: field,
						select: fields[field].StaticName,
					}

					switch (fields[field].TypeAsString) {
						case 'DateTime':
							fieldObject.render = (rowdata) => {
								if (moment(rowdata[field]).isValid()) {
									return (
										<Moment
											// calendar={calendarStrings}
											format='YYYY-MMM-DD hh:mm'
											date={rowdata[field]}
										/>
									)
								}
							}
							break
						case 'UserMulti':
							fieldObject.expand =
								fields[field].StaticName + '/Id'
							fieldObject.select =
								fields[field].StaticName + '/Title'
							fieldObject.render = (rowdata) => {
								if (rowdata.Users.results)
									return (
										<List
											dense={true}
											disablePadding={true}>
											{rowdata.Users.results.map(
												(user, index) => (
													<ListItem
														key={index}
														dense={true}
														disableGutters={true}>
														{user.Title}
													</ListItem>
												)
											)}
										</List>
									)
							}
							break
						case 'User':
							fieldObject.expand =
								fields[field].StaticName + '/Id'
							fieldObject.select =
								fields[field].StaticName + '/Title'
							fieldObject.render = (rowdata) => {
								return (
									<List dense={true} disablePadding={true}>
										<ListItem
											dense={true}
											disableGutters={true}>
											{rowdata.SingleUser.Title}
										</ListItem>
									</List>
								)
							}
							break
						default:
						//console.log('Unhandled field type', fields[field])
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
	}, [list])

	useEffect(() => {
		if (viewColumns) {
			let itemsSelect = viewColumns.map((column) => column.select)
			let itemsExpand = []
			for (let i = 0; i < viewColumns.length; i++) {
				if (viewColumns[i].expand)
					itemsExpand.push(viewColumns[i].expand)
			}

			GetListItems({
				baseurl: baseurl,
				listName: listName,
				listGUID: listGUID,
				select: itemsSelect.join(','),
				expand: itemsExpand.join(','),
			}).then((response) => {
				setListItems(
					response.map((item) => {
						item.LinkTitleNoMenu = item.Title
						item.LinkTitle = item.Title
						item.Url = item.__metadata.uri
						return item
					})
				)
			})
		}
		return () => {}
	}, [viewColumns])

	return (
		<Fragment>
			<MaterialTable
				actions={actions}
				icons={icons}
				data={listItems}
				title={title}
				columns={viewColumns}
				options={options}
			/>
			<SPFormDialog
				open={formState.open}
				title={formState.title}
				handleClose={formState.handleClose}
				handleSave={formState.handleSave}
			/>
		</Fragment>
	)
}
