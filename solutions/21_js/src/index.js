// React hooks allow the use of state, life-cycle without the use of class component.With the use of hook we can only have one functional component
/* Basic Hook
-useState
-useEffect
-useContext
*/ 
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import userImage from './images/pxfuel.jpg'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sept',
    'October',
    'November',
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month}, ${date}, ${year}`
}

const UserCard = ({user:{ firstName, lastName, image}}) => {
  <div className="User">
    <img src={image} alt="userImg" width={200} height={200}/>
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
}

const Button = ({text, onClick, style}) => {
 return <button onClick={onClick} style={style}>{text}</button>
}

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Header = (props) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date
  } = props.data
  return (
    <header style={props.style}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h2>{firstName} {lastName}</h2>
        <small>{date}</small>
      </div>
    </header>
  )
}

const Count = ({count, addOne, minusOne}) => {
  <div>
    <h1>{count}</h1>
    <div>
      <Button text='add One' onClick={addOne} style={buttonStyles} />
      <Button text='minus One' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
}

const TechList = (props) => {
  const {techs} = props
  const techFormatted = techs.map((tech) => <li >{tech}</li>)
  return techFormatted
}

const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    showTime,
    changeBackground,
    count, addOne, minusOne,


  } = props
  return(
    <main>
      <div className="main-wrapper">
        <p>Prerequites:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button onClick={greetPeople} text='greetPeople' style={buttonStyles}/>
        <Button onClick={showTime} text='show time' style={buttonStyles}/>
        <Button onClick={changeBackground} text='change background' style={buttonStyles}/>
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright{props.date.getFullYear()} </p>
      </div>
    </footer>
  )
}

const App = (props) => {
  const url ='https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg'
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackGroundColor] = useState('#CD5C5C')
  const [image, setImage] = useState(url)
  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  const changeAnimal = () => {
    let dogURL =
    'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
  let catURL =
    'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg'
  let result = image === catURL ? dogURL : catURL
  setImage(result)
  }
  const addOne = () => {
    let value = count + 1
    setCount(value)
  }
  const minusOne = () => {
    let value = count - 1
    setCount(value)
  }

  const greetPeople = () => {
    alert('Welcome to 30 days of React')
  }

  const showTime = () => {
    alert(showDate(new Date()))
  }
  const changeBackground = () => {
    let bgOne = '#CD5C5C'
    let bgTwo = '#F08080'
    let bgResult = backgroundColor === bgOne ? bgTwo : bgOne
    setBackGroundColor(bgResult)
  }

  const data = {
    welcome: 'Welcome to 30 days of React',
    title: 'Use state',
    subtitle: 'Learning the use of useState react',
    author: {
       firstName: 'dol',
       lastName: 'chhetri', 
      },
    date: 'August 27, 2024'
  }

  const techs = ['html','css','JavaScript']
  const user = {...data.author, userImage }
  return (
    <div className="App" style={{background: backgroundColor}}>
      <Header data={data}/>
      <Main
       techs={techs}
       user={user}
       greetPeople={greetPeople}
       showTime={showTime}
       changeBackground={changeBackground}
       count={count} addOne={addOne} minusOne={addOne}  />
      <h1>{count}</h1>
      <img src={image} alt="animal" width={200} height={100}/>
      <button onClick={changeAnimal}>Change Animal Picture</button>
      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
  
       <Footer date={new Date()} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
