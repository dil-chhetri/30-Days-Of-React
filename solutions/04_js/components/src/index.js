import React from 'react'
import ReactDOM from 'react-dom'
import userImage from './images/01.jpg'


const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {firstName: 'Dil', lastName: 'Chhetri'}
const date = 'Oct 3, 2023'

const Header = () => (
  <header>
  <div className='header-wrapper'>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>{author.firstName} {author.lastName}</p>
    <small>{date}</small>

  </div>
</header>
)

const numOne = 2
const numTwo = 5

const result = (
  <p>
    {numOne} + { numTwo} = {numOne + numTwo}
  </p>
)


const yearBorn = 2020
const currentYear = 2024

const age = currentYear - yearBorn

const personAge = (
  <p>
  {' '}
  {author.firstName} {author.lastName} is {age} years old
  </p>
)

const UserCard = () => (
  <div className='user-card'>
      <img src={userImage} alt='asabeneh Image' />
      <h2>{author.firstName} {author.lastName}</h2>
  </div>
)




const TechList = () => {
  const techs = ['html', 'css', 'JavaScript']
  const techsFormatted = techs.map((techs)=><li key={techs}>{techs}</li>)
  return techsFormatted
}

const Main = () => (
  <main>
    <div className='main-wrapper'>
        <p>Prerequite to get started react.js</p>
        <ul>
          <TechList />
        </ul>
        {result}
        {personAge}
        <UserCard />
    </div>
  </main>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color

}

const HexaColor = () => <div>{hexaColor()}</div>

const copyright = '2020'
const Footer = () => (
  <footer style={{background: hexaColor()}}>
    <div className='footer-wrapper'>
        <p>Copyright &copy;{copyright}</p>
    </div>
  </footer>
)

const App = () => (
  <div className='app'>
      <Header />
      <Main />
      <HexaColor/>
      <Footer />
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)