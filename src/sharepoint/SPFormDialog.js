import React, { useState, useEffect } from 'react'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
} from '@material-ui/core'

export const SPFormDialog = ({ open, title, handleClose, handleSave }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin='dense'
					id='name'
					label='Email Address'
					type='email'
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose({action:''})} color='primary'>
					Cancel
				</Button>
				<Button onClick={handleSave({action:''})} color='primary'>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	)
}
