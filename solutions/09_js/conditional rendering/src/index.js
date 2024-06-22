import React from 'react'
import ReactDom from 'react-dom'

const Button = ({text,onclick}) => (
  <button onClick={onclick}>{text}</button>
)


class App extends React.Component {
  state = {
    loggedIn: false
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  render(){
    let status
    let text 
    if(this.state.loggedIn){
     status = <h2>You are logged in</h2>
      text = 'Log Out'
    }else{
      status = <h2>You're not logged in</h2>
      text = "Login"
    }
    
    return(
      <div className='container-wrapper'>
          {status}
          <Button text={text} onclick={this.handleLogin} />
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)