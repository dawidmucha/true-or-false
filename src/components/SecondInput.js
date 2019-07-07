import React from 'react'

class SecondInput extends React.Component {
	render() {
		return (
			<>
				<input type='text' onChange={(e) => this.props.getValue(e.target.value)} />
			</>
		)
	}
}

export default SecondInput