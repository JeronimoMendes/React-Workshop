import React, {useState} from 'react'
import { Book } from '../components/Book'
import data from "../books.json"
import { Typography } from '@mui/material'


export const HomePage = () => {
	return (
		<div>
			<Typography variant='h3' style={{textAlign: "center"}}>Welcome to the bookshop!</Typography>
			<Typography variant='h5' style={{textAlign: "center"}}>These are all the books that are available for purchase at the moment</Typography>
			<Typography variant='h6' style={{textAlign: "center"}}>React Workshop - Afonso Domingues</Typography>
			<Typography variant='h6'>List of available books: </Typography>
			<ul>
				{data.map((livro) => {
					return <Book info={livro}/>
				})}
			</ul>
		</div>
	)
}
