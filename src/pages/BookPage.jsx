import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import data from "../books.json"
import { BooksInsideInfo } from '../components/BookInsideInfo'
import { Button, Grid } from "@mui/material";
import React, {useState} from "react";


export const BookPage = (props) => {
	const {id} = useParams();
	const [number, setNumber] = useState(0);

	const handleClick = () => {
		setNumber(number + 1); 
	}

	return (
		<div>
			<Typography variant="h3" style={{textAlign: "center"}}>Página do livro: {data[id].title}</Typography>
			<ul>
				{<BooksInsideInfo info={data[id]}/>}
			</ul>

			<Grid container direction="row">
				<Grid item xs={6}>
					<span>Número de Likes: {number}</span>
				</Grid>
				<Grid item xs={6}>
					<Button onClick={handleClick} variant="contained">Like</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant="contained">Apagar</Button>
				</Grid>
			</Grid>
		</div>
	)
}