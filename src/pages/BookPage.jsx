import { Typography, Link, Container, Button, Paper, Grid, Stack, imageListClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../books.json";
/*
import axios from 'axios';
*/


export const BookPage = () => {
	const {id}=useParams();
	let search = data[id].title;
	/*
	let url = "https://wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles="+search;
	*/
	let id_int=parseInt(id);
	let id_int_previous=id_int-1;
	let id_int_next=id_int+1;
	if (id_int_previous < 0) id_int_previous=0;
	else if (id_int_next > 99) id_int_next=99;
	const previousLink = "http://localhost:3000/Book/"+id_int_previous;
	const nextLink ="http://localhost:3000/Book/"+id_int_next;
	/*
	let h = new Headers();
	*/

	/*
	const newReq = new Request(url,{
		method: 'GET',
		headers: h,
		mode:'cors'
	});


	const[image,setImage] = useState()
	useEffect(() => {
		axios.get(newReq)
		.then((response) => {
			const responseImage = response.data;
			setImage(responseImage);
		})
	})
	
	*/

	const[likes,setLike]=useState(Math.floor(Math.random() * (100 - 0 + 1) + 0))
	const[dislikes,setDislike]=useState(Math.floor(Math.random() * (100 - 0 + 1) + 0))

	const[likeActive,setLikeActive]=useState(false)
	const[dislikeActive,setDislikeActive]=useState(false)

	function like(){
		if (likeActive)
		{
			setLikeActive(false);
			setLike(likes-1)
		}
		else
		{
			setLikeActive(true)
			setLike(likes+1)
			if(dislikeActive){
				setDislikeActive(false)
				setDislike(dislikes-1)
			}
		}
	}

	function dislike(){
		if (dislikeActive)
		{
			setDislikeActive(false);
			setDislike(dislikes-1);
		}
		else
		{
			setDislikeActive(true)
			setDislike(dislikes+1)
			if(likeActive){
				setLikeActive(false)
				setLike(likes-1)
			}
		}
	}

	return (
			<Container >
					<Typography variant="h1" component="h1" textAlign="center" style={{height:150}}>Welcome to Book Page!</Typography>
					<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight:200}}>
						<Paper elevation={3}>
							<Typography variant="h6">
							Name of the Book: {data[id].title}
							</Typography>
							<Typography variant="h6">
							The author's name is {data[id].author}
							</Typography>
							<Typography variant="h6">
							This book was written in {data[id].language}
							</Typography>
							<Typography variant="h6">
							{data[id].author} hails from {data[id].country}
							</Typography>
							<Typography variant="h6">For more info follow: <Link href={data[id].link} variant="body2"> {data[id].link}</Link> </Typography>
						</Paper>
					</Grid>
					<Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
					<Button variant="contained" color="success" style={{width:120}} onClick={like}>Like {likes}</Button> &nbsp; &nbsp; &nbsp;
					<Button variant="contained" color='error' style={{width:120}} onClick={dislike}>
						Dislike {dislikes}
					</Button>
					</Grid>
					<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight:150}}>
						<Grid item xs={6} style = {{justifyContent:"center"}}>
						<Link href={previousLink} variant="body2" underline="none">
							<Button>Previous Book</Button>
						</Link>
						</Grid>
						<Grid item xs={6}>
						<Link href={nextLink} variant="body2" underline="none">
							<Button>Next Book</Button>
						</Link>
						</Grid>
					</Grid>
			</Container>
	)
}
