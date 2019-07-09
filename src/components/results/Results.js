import React from 'react';
import './results.css';

const Results = (props) => {
	const result = (props) => {
		try {
			switch(props.co) {
				case 'lt':
					return eval(eval(props.fi) < eval(props.se))
				case 'gt':
					return eval(eval(props.fi) > eval(props.se))
				case 'loet':
					return eval(eval(props.fi) <= eval(props.se))
				case 'goet':
					return eval(eval(props.fi) >= eval(props.se))
				case 'e': //eslint-disable-next-line
					return eval(eval(props.fi) == eval(props.se))
				case 'se':
					return eval(props.fi) === eval(props.se)
				case 'i': //eslint-disable-next-line
					return eval(eval(props.fi) != eval(props.se))
				case 'si':
					return eval(eval(props.fi) !== eval(props.se))
				default:
					return '' 
			}
		} catch(e) {
			return ''; // prevents app from crashing, god bless this line
		}
	}

	return (
		<div>
			<h1>{result(props).toString()}</h1>
		</div>
	)
}

export default Results