import React from 'react'
import ReactDom from 'react-dom'

const getUserInformation = (firstName, lastName, county) => {
  return  `${firstName} ${lastName}, ${county}`
}

console.log(getUserInformation('MangoKhan', 'Muslim', 'China'))


const UserCard = ({user: {firstName, lastName}}) => {
  return (
    <div>
      <h1>{firstName}{lastName}</h1>
      <small>{lastName}</small>
    </div>
  )
}

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
  return  `${month} ${date}, ${year}`
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author:{firstName, lastName},
    date
  }
}) => {

  const showTime = () => {
   alert(showDate(new Date()))
  }
  // const data = props.data
  // const {
  //         welcome,
  //         title,
  //         subtitle,
  //         author:{firstName, lastName},
  //         date} = data

  return (
    <header>
      <div className='header-wrappper'></div>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{firstName}{lastName}</p>
      <p>{showDate(date)}</p>
      <Button onClick={showTime} text='Date and Time'/>
    </header>
  )

}


const Age = ({age}) => <div>The person is {age} years old.</div>

const Weight = ({weight}) => (<p>The weight of the object on earth is {weight} N.</p>)

const Status = ({isStatus}) => {
  let status = isStatus ? 'Old enough to drive' : 'Too young to drive'
  return <p>{status}</p>
}

const Skills = ({skills}) => { 
const skillList = skills.map((skill)=><li key={skill}>{skill}</li>)
return <ul>{skillList}</ul> 
}

const Main = ({user}) => (
<main>
  <div className='main-wrapper' style={{background:'blue'}}>
    <UserCard user={user} />
  </div>
</main>
)

const App = () =>
  {
    const data = {
    welcome : "Welcome to 30 days of React",
    title :  'Getting Started React',
     subtitle :  'JavaScript Library',
     author :  {
    firstName: 'Dil',
    lastName: 'Yetayeh',
    },
     date :  new Date(),
  }
  const user = { ...data.author}

    let currentYear = 2024
    let yearBorn = 1923
    const age = currentYear - yearBorn
    const gravity = 9.81
    const mass = 75
    let status = age >= 18
    const skills = ['html', 'css', 'csas']
    const sayHi = () => {
      alert('hi')
    }

    const handleTime = () => {
      alert(showDate(new Date()))
    }
    const greetPeople = () => {
      alert('Welcome to 30 Days Of React Challenge, 2020')
    }
  return (
  <div className='app-wrapper'>

  <Header data={data} />
  <Main user={user} />
    <Age age={age} />
    <Weight  weight={gravity * mass} />
    <Status status={status} />
    <Skills skills={skills} />
    <Button onClick={sayHi} text="clickme"/>
    <Button onClick={()=>alert('hello')} text="hello" />
    <Button text='show time' onClick={handleTime} />
    <Button text='Greet People' onClick={greetPeople} />
  </div>
)
  }




const rootElement = document.getElementById('root')
ReactDom.render(<App /> , rootElement)