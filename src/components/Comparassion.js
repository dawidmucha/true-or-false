import React from 'react'

class Comparassion extends React.Component {
	render() {
		return (
			<select onChange={(e) => this.props.getValue(e.target.value)}>
				<option value='lt'>&lt;</option>
				<option value='gt'>&gt;</option>
				<option value='loet'>&lt;=</option>
				<option value='goet'>&gt;=</option>
				<option value='e'>==</option>
				<option value='se'>===</option>
				<option value='i'>!=</option>
				<option value='si'>!==</option>
			</select>
		)
	}
}

export default Comparassion