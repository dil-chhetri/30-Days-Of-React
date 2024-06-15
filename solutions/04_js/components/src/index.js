import React from 'react'
import ReactDOM from 'react-dom'
import userImage from './images/01.jpg'


const Header = () => (
  <header>
  <div className='header-wrapper'>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 3, 2020</small>

  </div>
</header>
)

const UserCard = () => (
  <div className='user-card'>
      <img src={userImage} alt='asabeneh Image' />
  </div>
)

const TechList = () => {
  
}


const rootElement = document.getElementById('root')

ReactDOM.render(<Header />, rootElement)