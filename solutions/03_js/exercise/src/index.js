import React from 'react'
import ReactDOM from 'react-dom'
import localImage from './images/01.jpg'
import html from './images/html.png'
import js from './images/js_img.jpg'
import css from './images/css.jpg'


const headerInfo = 'Front End Technologies'
const header = (
  <div className='header-wrapper' style={{padding: 20}}>
    <h4 style={{textAlign: 'center'}}>{headerInfo}</h4>
    <div className='technologies' style={{display:'flex', justifyContent:'space-between'}}>
          <img src={html} width={100} height={100} />
          <img src={js} width={100} height={100} />
          <img src={css} width={100} height={100} />

    </div>
  </div>

)

const user = {
  firstName: 'Dolsss',
  lastName: 'Mols'
}

const userUppser = {...user}

const title = 'Senior Engineer'

const country = 'China'

const UserInfo = (
  <div className='userInfo'>
    <img src={localImage} width={100} height={100} style={{borderRadius:50}} />
    <h3>{userUppser.firstName} {userUppser.lastName}</h3>
    <p>{title},{country}</p>

  </div>
)

const tech = ['html', 'css', 'react', 'js', 'css','cs','linux','cloud','magic','super', 'magics']
const techFormatted = tech.map((tech)=><li key={tech} style={{marginLeft:20, marginTop:20, listStyle:'none',background:'#2acfcf',padding:5, color:'white', borderRadius:10, fontWeight:500}}>{tech}</li>)


const main = (
  <div className='main-wrapper'>
    {UserInfo}
    <h3>SKILLS</h3>
    <ul style={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap'}}>{techFormatted}</ul>
    <p>Joined on 2020</p>
  </div>
)

const message = 'SUBSCRIBE'
const subMessage = 'Sign up with your email address to receive news and updates'
const inputGroup = (
  <div className='inputGroup' style={{marginBottom:30}}>
  <input type='text' placeholder='First name' style={{marginRight:20}}/>
  <input type='text' placeholder='Last name' style={{marginRight:20}}/>
  <input type='email' placeholder='Email'/>
  </div>
)

const button = (<button style={{background:'#f37474', border: 'none', width: 200, padding: 10, borderRadius: 10, color:'white', marginBottom:20}}>Subscribe</button>)

const footer = (
  <div className='footer-wraper' style={{textAlign:'center', background:'#c2e6f4', padding:20, margin:10}}>
      <h1>{message}</h1>
      <h3>{subMessage}</h3>
      {inputGroup}
      {button}
  </div>
)

const app = (
  <>
  {header}
  {main}
  {footer}
 
  </>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)