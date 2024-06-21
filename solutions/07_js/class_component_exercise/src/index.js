import React from 'react'
import ReactDom from 'react-dom'
import UserImage from './images/01.jpg'
import css from './images/css.jpg'
import html from './images/html.png'
import js from './images/js_img.jpg'


const UserCard = ({firstName, lastName, image}) => (
  <div className='user-card'>
 <img src={image} alt={firstName} width={100} height={100} />
 <h2>{firstName} {lastName}</h2>
 </div>
)

const Tech = ({techs}) => {
  let TechFormated = techs.map((tech)=><img src={tech} width={100} height={100} alt={tech} />)
  return <div>{TechFormated}</div>
}

const Input = ({placeholder,type})=>(
  <input placeholder={placeholder} type={type}  />
)

const Button = ({text,onclick}) => (
  <button onClick={onclick}>{text}</button>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++ ){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

class User extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {
      user
    } = this.props
    return (
      <UserCard firstName={user.firstName} lastName={user.lastName} image={user.image} />
    )
  }
}


class HexaColor extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {
      color,
      text,
      onclick,
    } = this.props
    for(let i = 0; i <=5; i++){
      color.push(<div style={{background:hexaColor()}}>{hexaColor()}</div>)
    }
    return (
        <>
          {color}
          <Button text={text} onclick={onclick} />
        </>
    )
  }
}

class Technologies extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    const {
      techs
    } = this.props
  return(
    <>
      <h1>Front End Technologies</h1>
    <Tech techs={techs} /> 
    </>
  )
}

}


class InputGroup extends React.Component {
  popMessage = () => {
    alert('Subscribe to the channel')
  }

  render(){
    const {

      text,
     
    } = this.props
    return(
      <div>
        <Input placeholder='FirstName' type='text'/>
        <Input placeholder='FirstName' type='text' />
        <Input placeholder='FirstName' type='text' />
        <Button text={text} onclick={this.popMessage} />
      </div>
    )
  }
}

class App extends React.Component {
  showColor = () => {
    alert(hexaColor())
}
  render(){
    const data = {firstName:'dil', lastName: 'chhetri'}
    const tech = [html, css, js]
    const text = 'Subscribe'
    const color = []
    const user = {...data, image:UserImage}
    return(
      <>
      <Technologies techs={tech} />
      <InputGroup text={text}/>
      <HexaColor color={color} text='show color' onclick={this.showColor}/>
      <User user={user} />

      </>
    )
  }
}

const rootElement  = document.getElementById('root')
ReactDom.render(<App />, rootElement)
