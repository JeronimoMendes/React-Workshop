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
			<Typography variant="h4" style={{textAlign: "center"}}>Aditional information about: {data[id].title}</Typography>
			<Grid container>
				{<BooksInsideInfo info={data[id]}/>}
				<Grid item xs={9}>
					<Typography variant="h6" style={{textAlign: "center"}}>Likes: {number}</Typography>
				</Grid>
			</Grid>
			<br/>
			<Grid container direction="row">
				<Grid item>
					<Button color="secondary" onClick={handleClick} variant="contained">Like</Button>
				</Grid>
			</Grid>
		</div>
	)
}