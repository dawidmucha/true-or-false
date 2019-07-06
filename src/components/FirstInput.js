import React from 'react'

class FirstInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<input type='text' onChange={(e) => this.props.getValue(e.target.value)} />
			</>
		)
	}
}

export default FirstInput