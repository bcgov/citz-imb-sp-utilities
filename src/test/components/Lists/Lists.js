import React, { useEffect } from 'react'
import { GetList, GetListFields, GetListItems } from 'Components'
import { ListName, ListGUID } from 'test/components/Reusable/Constants'

export const Lists = () => {
	const getList = async () => {
		const list = await GetList({
			listName: ListName,
			expand: 'Items',
			filter: 'Items/ID eq 1',
			select: 'Items/ID',
		})
		console.log('list :>> ', list)
	}
	const getListFields = async () => {
		const fields = await GetListFields({
			listGUID: ListGUID,
			filter: 'Hidden eq false and ReadOnlyField eq false',
		})
		console.log('fields :>> ', fields)
	}
	const getListItems = async () => {
		const items = await GetListItems({
			listGUID: ListGUID,
			select: 'Id,ContentType',
			filter: 'Id eq 2',
			expand: 'ContentType',
		})
		console.log('items :>> ', items)
	}

	useEffect(() => {
		//getList()
		//getListFields()
		getListItems()
		return () => {}
	}, [])
	return <div>Lists</div>
}
