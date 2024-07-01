import React from 'react'
import  ReactDom from 'react-dom'
import userImage from './images/01.jpg'
import html from  './images/html.png'
import css from './images/css.jpg'
import javascripts from './images/js_img.jpg'

const Tech = ({techs}) => {
  const techStack = techs.map((tech)=><img src={tech} width={100} height={100} alt={tech} />)
  return <div className='technologies'>{techStack}</div>
}

const Header = ({techs}) => (
  <header>
    <div className='header-wrapper'>
  <h2>Front end Technologies</h2>
  <Tech techs={techs} />
  </div>
  </header>


)
const Input = ({text, type}) => <input type={type} placeholder={text} />
const Button = ({text}) => <button>{text}</button>
const Body = ({data:{message, subMessage }}) => (
  <div className='body-wrapper'>
        <h1>{message}</h1>
        <h3>{subMessage}</h3>
        <Input  text='First Name' type='text' />
        <Input  text='Last Name' type='text'/>
        <Input  text='email' type='email'/>
        <Button text='Subscribe' />
  </div>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
    for(let i = 0; i < 6; i++){
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
}

const HexaColor = ({color}) => {
  for(let i = 0; i < 5; i++)(
    color.push(<div key={i} style={{ backgroundColor: hexaColor(), padding: '10px', marginBottom: '10px'}}>{hexaColor()}</div>)
  )
  return (
    <div>{color}</div>
  )
}


const User = ({user:{firstName, lastName, image, title, country}}) => (
  <div className='user-card'>
    <img src={image} alt={image} width={100} height={100}/>
    <h2>{firstName}{lastName}</h2>
    <p>{title}, {country}</p>
  </div>
)

const Skills = ({skills}) => {
let skillsList = skills.map((skills)=><li key={skills} style={{listStyle:'none', background:'pink', marginLeft: 20, padding: 5, borderRadius: 10}}>{skills}</li>)
return <ul style={{display:'flex'}}>{skillsList}</ul>
}

const Main = ({user, skills}) => (
  <>
  <User user={user} />
  <h1>SKILLS</h1>
  <Skills skills={skills} />
  </>
)





const App = () => {
  const tech = [html, css, javascripts]
  const data = {
    message: 'SUBCRIBE',
    subMessage: 'Sign up with your email'
  }
  const user = {
    firstName:'dol',
    lastName: 'mol',
    image: userImage,
    title: 'Senior Engineer',
    country: 'Nepal'

  }
  const skills = ['html','css','js']
  return(
    <>
    <Header techs={tech} />
    <Body data={data} />
    <HexaColor color={[]} />
    <Main user={user} skills={skills} />
    </>
  )
}







const rootElement = document.getElementById('root')

ReactDom.render(<App />, rootElement)