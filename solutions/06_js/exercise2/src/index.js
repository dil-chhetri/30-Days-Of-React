import React from 'react'
import ReactDom from 'react-dom'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i=0; i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaMapNumColor = () => {
  let color = []
  for(let i = 0; i < 30; i++)(
    color.push(<div key={i} style={{ backgroundColor: hexaColor(), padding: '10px', width:200, height:200}}>{hexaColor()}</div>)
  )
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', textAlign:'center', flex:'center'}}>{color}</div>
  )
}

const App = () => (
  <div className='container'style={{}} >
      <HexaMapNumColor />
  </div>
)
const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)