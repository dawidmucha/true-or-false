import React from 'react';
import './results.css';

const Results = (props) => {
	const result = (props) => {
		try {
			return window.Function(`return(${props.fi} ${props.co} ${props.se})`)()
		} catch(e) {
			return 'invalid inputs';
		}
	}

	return (
		<div>
			<h1>{result(props).toString()}</h1>
		</div>
	)
}

export default Results