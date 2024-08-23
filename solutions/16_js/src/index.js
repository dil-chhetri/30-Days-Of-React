// One way of writing Higher Order Component (HOC)
// import React, { Component } from "react";
// const higherOrderComponent = (Component) => {
//   return (props) => {
//     return <Component {...props} />
//   }
// }

import React, { Component } from "react";
import ReactDOM from 'react-dom'

const Button = ({ onClick, text, style}) => {
  return (
    <button onClick={onClick} style={style}>{text}</button>
  )
}

const Input = ({ type, placeholder, text}) => {
  return (
    <input type={type} placeholder={placeholder} value={text}/>
  )
}

const inputWithQuirks = (CompParam, name='default') => {
  const placeholders = [
    {
      name: 'default',
      placeholder:'default'
    },
    {
      name: 'react',
      placeholder: 'this is reaact'
    }
  ]
const placeholder = placeholders.find((c)=> c.name === name)
console.log(placeholder)

const inputPlaceholder = {
  placeholder,
}
  return (props) => <CompParam {...props} placeholder={inputPlaceholder} />
}

const NewInput = inputWithQuirks(Input)
const ReactInput = inputWithQuirks(Input, 'react')

const buttonWithSuperPower = (CompParam, name='default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]

  const {backgroundColor, color} = colors.find((e)=> e.name === name)
  const buttonStyles = {

    // backgroundColor: '#61dbfb',
    backgroundColor,
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    // color: 'white',
    color
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithSuperPower(Button)
const ReactButton = buttonWithSuperPower(Button, 'react')
const InfoButton = buttonWithSuperPower(Button, 'info')
const SuccessButton = buttonWithSuperPower(Button, 'success')
const WarningButton = buttonWithSuperPower(Button, 'warning')
const DangerButton = buttonWithSuperPower(Button, 'danger')

class App extends Component {
  render(){
    return (
      <div>
        <Button text='No Style' onClick={() => alert('I am not styled yet')} />
        <NewButton
          text='Styled Button'
          onClick={() => alert('I am the default style')}
        />
        <ReactButton text='React' onClick={() => alert('I have react color')} />
        <InfoButton
          text='Info'
          onClick={() => alert('I am styled with info color')}
        />
        <SuccessButton text='Success' onClick={() => alert('I am successful')} />
        <WarningButton
          text='Warning'
          onClick={() => alert('I warn you many times')}
        />
        <DangerButton
          text='Danger'
          onClick={() => alert('Oh no, you can not restore it')}
        />
        <Input value='hello' type='number' />
        <NewInput value='New input' type='text' />
        <ReactInput value='React Input' type='text' />
        
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)