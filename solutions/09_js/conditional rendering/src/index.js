import React from 'react'
import ReactDom from 'react-dom'

const Button = ({text,onclick}) => (
  <button onClick={onclick}>{text}</button>
)

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)

const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days of React</h1>
  </div>
)

const Message = ({message}) => (
  <div>
    <h1>{message}</h1>
  </div>
)

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['html', 'css', 'js'],
    message: ''
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  greetPeople = () => {
    let message = "Welcome to 30 Days of React Challenge"
    this.setState({message})
  }
  render(){
    const {loggedIn, techs} = this.state
   
    
    const status = this.state.loggedIn ? <Welcome /> :  <Login />
     
    
    
    return(
      <div className='container-wrapper'>
          {status}
          <Button text={this.state.loggedIn ? 'Logout' : 'Login'} onclick={this.handleLogin} />
          {
            techs.length === 3 && (
              <p>You have all the prerequites courses to get stated with React</p>
            )
          }
          {!loggedIn && (
            <p>Please login to access more information about 30 Days of React Challenge</p>
          )

          }
          <Message message={this.state.message} />
          <Button text='show message' onclick={this.greetPeople} />
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)