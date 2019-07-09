import React from 'react'
import './input.css'

class Input extends React.Component {
	render() {
		return (
			<>
				<input type='text' onChange={(e) => this.props.getValue(e.target.value)} />
			</>
		)
	}
}

export default Input