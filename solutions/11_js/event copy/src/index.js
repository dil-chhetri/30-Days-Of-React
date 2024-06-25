import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    firstName: '',
    message: 'nothing',
    key: '',
  }
  handleClick = (e) => {
    this.setState({
      message: 'Welcome to the world of events',
    })
  }
  handleMouseMove = (e) => {
    this.setState({
      message: "Mouse is moving"
    })
  }
  handleKeyPress = (e) => {
    console.log(e)
    this.setState({
      message: `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  handleCopy = (e) => {
    this.setState({
      message: 'Text has been copied'
    })
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({
      firstName: e.target.value,
      message: e.target.value
    })
  }
  render(){
    return(
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Click</button>
        <button onMouseMove={this.handleMouseMove}>Mouse Move</button>
        <label htmlFor=''>Test for key press</label>
        <input onKeyPress={this.handleKeyPress} type='text' />
        <p onCopy={this.handleCopy}>Check for copy</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input onChange={this.handleChange} name='firstName' value={this.state.value} />
          </div>
          <div>
            <input type='submit' value='Submit'></input>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)