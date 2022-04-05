import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'

export const Book = (props) => {
	return (
		<>
			<Box sx={{width: '450px', bgcolor: '#efefef'}}>
				<ListItem><NavLink to={"/book/" + props.info.id}>Title: {props.info.title}</NavLink></ListItem>
				<List>
					<ListItem><ListItemText>Author: {props.info.author}</ListItemText></ListItem>
					<ListItem><ListItemText>Year: {props.info.year}</ListItemText></ListItem>
					<ListItem><ListItemText>Language: {props.info.language}</ListItemText></ListItem>
				</List>
			</Box>
			<br/>
		</>
	)
}
