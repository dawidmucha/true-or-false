import React, { useContext } from 'react'
import Context from './context/Context'

const SecondInput = () => {
	const context = useContext(Context)

	const _onChange = (e) => {
		context[2] = e.target.value
		console.log(context)
	}

	return (
		<>
			<input type='text' onChange={(e) => _onChange(e)} />
		</>
	)
}

export default SecondInput