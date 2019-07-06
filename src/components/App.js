import React from 'react'
import FirstInput from './FirstInput'
import SecondInput from './SecondInput'
import Result from './Result'
import Comparassion from './Comparassion'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fi: '', // first input
      co: '', // comparassion
      se: ''  // second input
    }
  }

  getValueFromFirstInput = (data) => {
    this.setState({fi: data});
    console.log(this.state)
  }

  render() {
    return (
      <>
        <FirstInput getValue={this.getValueFromFirstInput.bind(this)} />
        <Comparassion />
        <SecondInput />
        <Result />
      </>
    );
  }
}

export default App
