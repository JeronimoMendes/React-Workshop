import React from 'react'
import { Book } from '../components/Book'
import data from "../books.json"
import { Divider, Typography, Grid, Box } from '@mui/material'

export const HomePage = () => {
	return (
		<div>
			<Box sx={{bgcolor: '#efefef'}}>
				<Typography variant='h3' style={{textAlign: "center"}}>Welcome to the bookshop!</Typography><br/>
				
				<Typography variant='h5' style={{textAlign: "center"}}>These are all the books that are available for purchase at the moment</Typography>
				
				<Typography variant='h6' style={{textAlign: "center"}}>For more 
				information about a certain book, type in the searchbar "/book/:id" where :id is the ID of the book</Typography><br/>
				
				<Typography variant='h6' style={{textAlign: "center"}}>React Workshop - Afonso Domingues</Typography><br/>
				<br/><Divider/>
			</Box>
			<br/>
			<Typography variant='h4' style={{textAlign: "center"}}>List of available books: </Typography>
			<br/>
			<Grid container>
					{data.map((livro) => {
						return (
							<Grid item xs={3}>
								<Book info={livro}/>
							</Grid>
						)
					})}
				
			</Grid>
		</div>
	)
}
