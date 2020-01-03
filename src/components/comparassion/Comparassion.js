import React from 'react'
import './comparassion.css'

class Comparassion extends React.Component {
	render() {
		return (
			<select onChange={(e) => this.props.getValue(e.target.value)}>
				<option value='<'>&lt;</option>
				<option value='>'>&gt;</option>
				<option value='<='>&lt;=</option>
				<option value='>='>&gt;=</option>
				<option value='=='>==</option>
				<option value='==='>===</option>
				<option value='!='>!=</option>
				<option value='!=='>!==</option>
			</select>
		)
	}
}

export default Comparassion