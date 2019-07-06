import React, { useContext } from 'react'
import Context from './context/Context'

const Result = () => {
	const context = useContext(Context)

	const _onChange = (e) => {
		context[1] = e.target.value
		console.log(context)
	}
	
	return (
		<select onChange={(e) => _onChange(e)}>
			<option>&lt;</option>
			<option>&gt;</option>
			<option>&lt;=</option>
			<option>&gt;=</option>
			<option>&lt;==</option>
			<option>&gt;==</option>
			<option>==</option>
			<option>===</option>
		</select>
	)
}

export default Result