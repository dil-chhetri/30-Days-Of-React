import React from 'react'
import ReactDom from 'react-dom'
import userImage from './images/01.jpg'
import html from  './images/html.png'
import css from './images/css.jpg'
import js from './images/js_img.jpg'

const message = 'Front End Technologies'

const Image = () => {
const technologies = [html, css, js]
const techImageFormatted = technologies.map((technologies) => <img src={technologies} width={100} height={100}/>)
return techImageFormatted
}



const Header = () => (
  <header style={{textAlign:'center'}}>
    <div className='header-wrapper'>
      <h2>{message}</h2>
      <div className='tech' style={{display: 'flex', justifyContent:'space-around', marginTop: 20}}>
          <Image />
      </div>
    </div>
  </header>
)

const mainMessage = 'SUBSCRIBE' 
const subMessage = 'Sign up with your email address to receive news and update'

const Input = ({type, placeholder,}) => (
<input  type={type} placeholder={placeholder} style={{textAlign:'center',marginRight:20}} />
)

const Button = () => ( <button style={{marginTop: 30,background: 'pink'}}>Subscribe</button>)

const Main = () => (
  <main style={{padding: 20}}>
    <div className='main-wrapper' style={{background:'#c2e6f4',padding:20}}>
      <h1>{mainMessage}</h1>
      <h2>{subMessage}</h2>
      <div className='input-group'>
        <Input type='text' placeholder='First Name'/>
        <Input type='text' placeholder='Last Name'/>
        <Input type='email' placeholder='Email'/>
      </div>
      <Button />
    </div>
  </main>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''

 
  for(let i = 0;i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color

}



const HexaColor = () => {
  const color = []
  for(let i = 0; i < 5; i++)(
    color.push(<div key={i} style={{ backgroundColor: hexaColor(), padding: '10px', marginBottom: '10px'}}>{hexaColor()}</div>)
  )
  return (
    <div>{color}</div>
  )
}

const userName = {firstName: 'chota', lastName: 'bichu'}
const title = 'Senior Developer'
const country = 'Nepal'

const User = () => (
  <>
  <img src={userImage} width={100} height={100} style={{borderRadius: 50}}/>
  <h2>{userName.firstName} {userName.lastName}</h2>
  <p>{title},{country}</p>
  </>
)
const Skills = () => {
  const technologies = ['html','css','javascript']
  const technologiesFomatted = technologies.map((tech)=><li key={tech} style={{listStyle:'none', background:'pink', marginLeft: 20, padding: 5, borderRadius: 10}}>{tech}</li>)
  return <ul style={{display:'flex',justifyContent:'flex-start'}}>{technologiesFomatted}</ul>
}
const Footer = () => (
  <div style={{textAlign:'left', padding: 20}}>
  <User />
  <h3>SKILLS</h3>
  <Skills />
  <span>Joined your ass</span>
  </div>
)

const App = () => (
  <div style={{textAlign: 'center'}}>
  <Header />
  <Main />
  <HexaColor />
  <Footer />
  </div>
)

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)