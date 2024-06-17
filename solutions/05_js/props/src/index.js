import React from 'react'
import ReactDom from 'react-dom'

const getUserInformation = (firstName, lastName, county) => {
  return  `${firstName} ${lastName}, ${county}`
}

console.log(getUserInformation('MangoKhan', 'Muslim', 'China'))


const User = (props) => {
  return (
    <div>
      <h1>{props.firstName}{props.lastName}</h1>
      <small>{props.lastName}</small>
    </div>
  )
}



const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrappper'></div>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.author.firstName}{props.author.lastName}</p>
      <p>{props.date}</p>
    </header>
  )

}

const App = () =>
  {
  
  return (
  <div className='app-wrapper'>
  <User firstName='dil' lastName='chhetri'  county='nepal' />
  <Header 
  welcome="Welcome to 30 days of React"
  title = 'Getting Started React' 
  subtitle = 'JavaScript Library'
  author = {{
    firstName: 'Dil',
    lastName: 'Yetayeh',
   }}
  date = 'Oct 2, 1290'
    />
  </div>
)
  }




const rootElement = document.getElementById('root')
ReactDom.render(<App /> , rootElement)