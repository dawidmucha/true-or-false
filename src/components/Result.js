import React from 'react';

const Result = (props) => {
	const result = (props) => {
		switch(props.co) {
			case 'lt':
				return props.fi < props.se
			case 'gt':
				return props.fi > props.se
			case 'loet':
				return props.fi <= props.se
			case 'goet':
				return props.fi >= props.se
			case 'e': //eslint-disable-next-line
				return props.fi == props.se
			case 'se':
				return props.fi === props.se
			case 'i': //eslint-disable-next-line
				return props.fi != props.se
			case 'si':
				return props.fi !== props.se
			default:
				return 'error' 
		}
	}

	return (
		<>
			<p>{props.fi} {props.co} {props.se}</p>
			<h2>{result(props).toString().toUpperCase()}</h2>
		</>
	)
}

export default Result