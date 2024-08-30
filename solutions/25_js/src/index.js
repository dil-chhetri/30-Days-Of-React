import useFetch from "./useFetch"
import ReactDOM from "react-dom"


const Country = ({country:{ name, flags, population}}) => {
  return (
    <div className="Country">
      <div>
        <img src={flags.png} name={name.common} />
      </div>
      <h3>{name.common}</h3>
      <div>
        <p>The population of these country is {population}</p>
      </div>
    </div>
  )
}

const App = (props) => {
  const url = 'https://restcountries.com/v3.1/all'
  const data  = useFetch(url)
  
  return (
    <div className="App">
      <h1>Fetching Data Using Api</h1>
      <div>
        <p>There are {data.length} countries in this api</p>
        <div>
          {data.map((country)=> (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)