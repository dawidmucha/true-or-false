import React from 'react'

const Context = React.createContext({
	values: ['', '', ''],
	changeValues: () => {}
});

export default Context