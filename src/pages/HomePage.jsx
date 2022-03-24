import React, {useState} from 'react'
import { Book } from '../components/Book'
import data from "../books.json"
import { Button, Grid } from '@mui/material'


export const HomePage = () => {
	const [number, setNumber] = useState(0);

	const handleClick = () => {
		setNumber(number + 1);
	}
		
	return (
	<div>
		
		<h1>Welcome to book store</h1>
		<h3>Here you can buy second hand books!</h3>
		<Grid container direction="row">
			<Grid item xs={6}>
				<span>{number}</span>
			</Grid>
			<Grid item xs={6}>
				<Button onClick={handleClick} variant="contained">Increment</Button>
			</Grid>
			<Grid item xs={6}>
				<h1>Counter</h1>
			</Grid>
			<Grid item xs={6}>
				<h1>Counter2</h1>
			</Grid>
		</Grid>
		<ul>
			{data.map((livro) => {
				return <Book info={livro} />
			})}
		</ul>
	</div>
	)
}
