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
    this.setState({fi: data})
  }

  getValueFromComparassion = (data) => {
    this.setState({co: data})
  }

  getValueFromSecondInput = (data) => {
    this.setState({se: data})
  }

  render() {
    return (
      <>
        <FirstInput getValue={this.getValueFromFirstInput.bind(this)} />
        <Comparassion getValue={this.getValueFromComparassion.bind(this)} />
        <SecondInput getValue={this.getValueFromSecondInput.bind(this)} />
        <Result fi={this.state.fi} co={this.state.co} se={this.state.se} />
      </>
    );
  }
}

export default App
