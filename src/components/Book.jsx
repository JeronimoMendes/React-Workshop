import React from 'react'

export const Book = (props) => {
  return (
	<>
		<li>{props.info.title}</li>
		<ul>
			<li>{props.info.date}</li>
			<li>{props.info.language}</li>
		</ul>
	</>
  )
}
