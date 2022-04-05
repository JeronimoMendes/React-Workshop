import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'

export const Book = (props) => {
  return (
	<>
		<Box sx={{width: '400px', bgcolor: '#efefef'}}>
			<ListItem><ListItemText>Title: {props.info.title}</ListItemText></ListItem>
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
