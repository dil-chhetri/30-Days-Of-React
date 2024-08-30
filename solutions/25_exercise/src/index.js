import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import useFetch from "./useFetch";
import axios from "axios";
const Currencies = ({currencyCode, name, symbol}) => {
  return (
  <div className="currencies">
    <h1>{currencyCode}</h1>
    <p>
      {name}
      {' '}
      {symbol}
      </p>
  </div>
  )
}

const Country = ({country:{name,flags,population,currencies}}) => {
  const currenciesEntries = Object.entries(currencies || {});
  return (
    <div className="Country">
        <h1>{name.common}</h1>
        <div>
          <img src={flags.png}  />
        </div>
        <p>{population}</p>
        {currenciesEntries.map(([currencyCode, {name, symbol}]) => 
          <Currencies currencyCode={currencyCode} name={name} symbol={symbol} />
        )}
    </div>
  )
}

const App = (props) => {
   const url = 'https://restcountries.com/v3.1/all'
  const data = useFetch(url)
  const [filteredData, setFilteredData] = useState(data); // Initialize state

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    const newFilteredData = data.filter(country =>
      country.name.common.toLowerCase().includes(term)
    );
    setFilteredData(newFilteredData); // Update state with the filtered data
  };
  return (
    <div className="App">
      <h1>Calling api</h1>
      <input 
      placeholder="Search Country"
      type="text"
      name="country"
      id="country"
      onChange={handleChange}
      />
      <div>
        {filteredData.map((country)=> (
          <Country country={country} />
        ))}
      </div>
    </div>
  )

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)