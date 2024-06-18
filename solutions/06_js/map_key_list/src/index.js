import React from 'react'
import ReactDom from 'react-dom'

const Number = ({numbers}) => {
  let numberList = numbers.map((num)=><li key={num}>{num}</li>)
  return numberList
}

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skills = ({skills:[skills, level]}) => (
  <li >{skills} {level}</li>
)

const SkillList = ({skills}) => {
  let skillList = skills.map((skill)=><Skills key={skill.skills} skills={skill} />)
  return <ul>{skillList}</ul>
}


const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]


 const Country = ({county:{name, city}}) => (
  <li>{name} {city}</li>
 )

 const CountryList = ({countries}) => {
  let countryList = countries.map((country)=><Country key={country.name} county={country} />)
  
  return <ul>{countryList}</ul>
  
 }
const App = () =>  {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
        <div>
          <h1>Number List</h1>
         <ul> <Number numbers={numbers} /> </ul>
        </div>
        <SkillList skills={skills} />
        <CountryList countries={countries} />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDom.render(<App />, rootElement)