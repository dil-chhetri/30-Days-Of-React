import React from 'react'
import ReactDom from 'react-dom'

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to determine the color based on the number
const getColor = (num) => {
  if (isPrime(num)) return 'red'; // Prime number

  if (num % 2 === 0) return 'green'; // Even number
  if (num % 2 !== 0) return 'yellow'; // Odd number
  return 'black'; // Default color
};

const MapNumber = ({number}) => (
  <div className='numbers' style={{ width:200, height:200, background:getColor(number)}}>
      <div className='numColor' >
        {number}
        </div>
  </div>
)

const GenerateColor = ({numbers}) => {
 const numberMap = numbers.map((number)=><MapNumber key={number}  number={number} />)
 return <div style={{display:'flex', flexWrap:'wrap', flexDirection: 'row', textAlign:'center'}}>{numberMap}</div>
}




const App = () => {
const number = [] 
for(let i = 0;i <=30; i++){
  number.push(i)
}
return (
  <div className='container'>
        <div>
            <GenerateColor numbers={number} />
        </div>
  </div>
)
}


const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)