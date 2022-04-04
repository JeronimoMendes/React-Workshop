import React, {useState} from 'react'
import { Book } from '../components/Book'
import data from "../books.json"


export const HomePage = () => {
	return (
		<div>
			<h1 style={{textAlign: "center"}}>Bem-vindo à loja de livros!</h1>
			<h3 style={{textAlign: "center"}}>React Workshop - Afonso Domingues</h3>
			<h1>Lista de todos os livros disponíveis: </h1>
			<ul>
				{data.map((livro) => {
					return <Book info={livro}/>
				})}
			</ul>
		</div>
	)
}
