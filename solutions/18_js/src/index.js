import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  console.log(languages)
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name}</h3>
      <div class='country_text'>
        <p>{formatedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = { 
    data: [],
  }

  componentDidMount() {
    // api calls using fetch
    // const url  = 'https://restcountries.com/v3.1/all'
    // fetch(url)
    // .then((response)=>{
      //   return response.json()
      // })
      // .then((data)=>{
        //   this.setState({data,})
        // })
        // .catch((error)=>{
          //   console.log(error)
          // })
           this.fetchCountryData()
          
          // using axios

        //    axios
        //    .get(url)
        //    .then((response)=>{
        //     this.setState({data,})
        //    })
        //    .catch((error)=> {
        //     console.log(error)
        //    })
        // }
        // using asynn and await along with try and catch
        // fetchCountryData = async () => {
        //   const url  = 'https://restcountries.com/v3.1/all'
        //   try{
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     this.setState({data,})
        //   } catch (error) {
        //     console.log(error)
        //   }
       }
       fetchCountryData = async () => {
       const url  = 'https://restcountries.com/v3.1/all'
       try {
        const response = await axios.get(url)
        const data = await response.data
        this.setState({data,})
       } catch(error){
        console.log(error)
       }
      }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)