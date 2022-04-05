import { Divider, Typography, Box } from "@mui/material";
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
			<Box sx={{bgcolor: '#efefef'}}>
				<Typography variant="h4" style={{textAlign: "center"}}>Aditional information about: {data[id].title}</Typography>
				<br/><Divider/>
			</Box>
			
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
				<Box textAlign='center' sx={{bgcolor: '#efefef'}}>
					{<BooksInsideInfo info={data[id]} id={id}/>}
					<Text>{id}</Text>
				</Box>
			</div>
			
			<br/>

			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h6" style={{textAlign: "center"}}>Likes: {number}</Typography>
					<br/>
					<Box textAlign='center'>
						<Button color="secondary" onClick={handleClick} variant="contained">Like</Button>
					</Box>
				</Grid><br/>
			</Grid>
		</div>
	)
}