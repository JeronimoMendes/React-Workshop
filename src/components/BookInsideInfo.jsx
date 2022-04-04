import React from 'react'

export const BooksInsideInfo = (props) => {
  return (
	<div>
	<>
		<li>Autor: {props.info.author}</li> <br/>
		<li>Ano: {props.info.year}</li> <br/>
		<li>País: {props.info.country}</li> <br/>
		<li>Língua: {props.info.language}</li> <br/>
		<li>Foto de capa: <img src={props.info.imageLink} alt="" /></li> <br/>
		<li>
			<a href={props.info.link}>Link para a página de Wikipédia</a>
		</li><br/>
		<li>Nº de páginas: {props.info.pages}</li> <br/>
		<br/>
	</>
	</div>
	
  )
}
