import React from 'react'
import Input from './input/Input'
import Results from './results/Results'
import Comparassion from './comparassion/Comparassion'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fi: '', // first input
      co: '<', // comparassion
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
      <div className='root'>
        <h2>true or false?</h2>
        <p>NOTE - those inputs are treated as JavaScript expressions. If you want to compare strings, make sure to use quotation marks</p>
        <Input className='firstInput' getValue={this.getValueFromFirstInput.bind(this)} />
        <Comparassion className='comparassion' getValue={this.getValueFromComparassion.bind(this)} />
        <Input className='secondInput' getValue={this.getValueFromSecondInput.bind(this)} />
        <Results className='results' fi={this.state.fi} co={this.state.co} se={this.state.se} />
      </div>
    );
  }
}

export default App
