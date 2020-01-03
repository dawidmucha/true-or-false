import React from 'react';
import './results.css';

const Results = (props) => {
	const result = (props) => {
		try {
			console.log(props.fi, props.co, props.se)
			switch(props.co) {
				case 'lt':
					return window.Function(`return(${props.fi} < ${props.se})`)()
				case 'gt':
					return window.Function(`return(${props.fi} > ${props.se})`)()
				case 'loet':
					return window.Function(`return(${props.fi} <= ${props.se})`)()
				case 'goet':
					return window.Function(`return(${props.fi} >= ${props.se})`)()
				case 'e': //eslint-disable-next-line
				return window.Funcitin(`return(${props.fi} = ${props.se})`)()
				case 'se':
					return window.Function(`return(${props.fi} == ${props.se})`)()
				case 'i': //eslint-disable-next-line
				return window.Function(`return(${props.fi} != ${props.se})`)()
				case 'si':
					return window.Function(`return(${props.fi} !== ${props.se})`)()
				default:
					return 'invalid inputs' 
			}
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