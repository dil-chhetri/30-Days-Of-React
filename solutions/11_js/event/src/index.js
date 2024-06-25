import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component{
  greetPeople = () => {
      alert('Welcome to 30 days of React')
  }
  handleClick = () => {
    alert("Welcome to 11 days of doing react")
  }
  render(){
    return (
    <div>
    <button onClick={this.greetPeople}>Greet People</button>
    <a href='#' onClick={this.handleClick}>Click</a>
    </div>
    )
  }
}

const rootElement = document.getElementById('root')

ReactDom.render(<App />, rootElement)
