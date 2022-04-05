import { ListItem, ListItemText } from '@mui/material'
import React from 'react'

export const BooksInsideInfo = (props) => {
  return (
	<div>
	<>
		<ListItem><ListItemText>Author: {props.info.author}</ListItemText></ListItem> 
		<ListItem><ListItemText>Year: {props.info.year}</ListItemText></ListItem> 
		<ListItem><ListItemText>Country: {props.info.country}</ListItemText></ListItem> 
		<ListItem><ListItemText>Language: {props.info.language}</ListItemText></ListItem> 
		<ListItem><ListItemText>Book cover: <img src={props.info.imageLink} alt="" /></ListItemText></ListItem>
		<ListItem><ListItemText>
			<a href={props.info.link}>Link to the Wikipedia page</a>
		</ListItemText></ListItem>
		<ListItem><ListItemText>Number of pages: {props.info.pages}</ListItemText></ListItem> 
	</>
	</div>
  )
}
