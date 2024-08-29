import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import axios from 'axios';

const CurrencyFormat = ({ currencyCode, name, symbol }) => {
  return (
    <div className='currency'>
      <p><strong>{currencyCode}</strong></p>
      <p>{name}</p>
      <p>{symbol}</p>
    </div>
  );
};


const Country = ({country: {name, flags, population, currencies}}) => {
  const currencyEntries = Object.entries(currencies || {});
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img src={flags.png} />
      </div>
      <h1>{name.common}</h1>
      <div>
        <p>{population}</p>
      </div>
     
      {currencyEntries.map(([currencyCode, { name, symbol }]) => (
          <CurrencyFormat
            key={currencyCode} // Provide a unique key for each item
            currencyCode={currencyCode}
            name={name}
            symbol={symbol}
          />
        ))}
      
    </div>
  )
}

const App = (props) => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=> {
    fetchData()
  },[])

    const handleChange = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
  
      // Filter the countries based on the search term
      const filteredData = allData.filter(country =>
        country.name.common.toLowerCase().includes(term)
      );
      
      setData(filteredData);
  }

 const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    try {
      const response = await axios.get(url)
      const data = await response.data
      setAllData(data);
      setData(data)
      console.log(data.currencies)
    } catch(errors) {
      console.log(errors)
    }
  }

  return (
    <div>
    <div>
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        Country
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">

        <input
          id="country"
          name="country"
          type="text"
          placeholder="Search for country"
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Search for country by id
          </label>

        </div>
      </div>
    </div>
    <div className='grid grid-rows-4 gap-4 grid-flow-col auto-cols-max'>

      {data.map((country) => (
        <Country country={country} />
      ))
      }
    </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
