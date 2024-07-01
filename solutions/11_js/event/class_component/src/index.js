import React from 'react'
import ReactDom from 'react-dom'
import UserImg from './images/01.jpg'
const UserCard = ({user:{firstName, lastName, image}}) => (
  <div className='user-container'>
    <img src={image} alt={firstName} />
    <h2>{firstName}{lastName}</h2>
  </div>
)


const Button = ({text, onclick}) => (
  <button onClick={onclick}>{text}</button>
)

class Header extends React.Component {
  greetPeople = () => {
    alert('Welcome to 30 days of React Challenge, 2020')
  }
  render() {
    console.log(this.props.data)
    const {
      welcome, 
      title,
      author: {firstName, lastName},
      date,
    } = this.props.data
    return (
      <header>
        <div className='header'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3> {firstName} {lastName}</h3>
          <small>{date}</small>
          <button onClick={this.greetPeople}>greetPeople</button>
          <Button  text={welcome} onclick={this.greetPeople}  />
          <Button  text={date} onclick={this.props.handleTime}  />

        </div>
      </header>
    )
  }
}


class TechList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)
    return techsFormatted
  }
}


class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <main>
        <div className='main-wrapper'>
          <ul>
            <TechList techs={this.props.techs} />
            <UserCard user={this.props.user} />
          </ul>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  handleTime = () => {
    alert('mew mew time')
  }
  render(){
    const data = {
      welcome: "Welcome to React",
      title: 'Yo yp',
      author: {firstName: 'dil', lastName: 'chhetri'},
      date: 'oct 233'
    }
    const techs = ['htlm','css','js']
    const user = { ...data.author, image:UserImg}
    return(
      <>
      <Header data={data} handleTime={this.handleTime}/>
      <Main techs={techs} user={user} />
      <Footer />
      </>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)