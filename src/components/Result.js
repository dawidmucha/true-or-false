import React, { useContext } from 'react';
import Context from './context/Context'

const Result = () => {
	const context = useContext(Context)
	const result = "womp womp womp"
	
	return (
		<>
			<p>{context[0]} {context[1]} {context[2]}</p>
			<p>{result}</p>
		</>
	)
}

export default Result