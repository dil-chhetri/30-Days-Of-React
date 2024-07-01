
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  firstName = React.createRef()
  lastName = React.createRef()
  country = React.createRef()
  title = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.firstName.current.value)
    console.log(this.lastName.current.value)
    console.log(this.country.current.value)
    console.log(this.title.current.value)

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      country: this.country.current.value,
      title: this.title.current.value,
    }

  }


  render(){
    return (
      <div className='App'>
        <form>
          <div>
          <label htmlFor='firstName'>
            FirstName
          </label>
          <input type='text' id='firstName' name='firstName' placeholder='First Name' ref={this.firstName}/>
          </div>
          
          <div>
          <label htmlFor='lastName'>
            lastName
          </label>
          <input type='text' id='lastName' name='lastName' placeholder='First Name' ref={this.lastName}/>
          </div>

          
          <div>
          <label htmlFor='country'>
            country
          </label>
          <input type='text' id='country' name='country' placeholder='First Name' ref={this.country}/>
          </div>

          
          <div>
          <label htmlFor='title'>
            title
          </label>
          <input type='text' id='title' name='title' placeholder='First Name' ref={this.title}/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)