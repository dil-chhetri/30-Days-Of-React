import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios  from 'axios';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Home = (props) => <h1>This is home</h1>
const About = (props) => <h2>This is about</h2>

const calculateAverage = (values) => {
  if (values.length === 0) return 'Unknown'
  const total = values.reduce((acc, values) => acc + values, 0)
  return (total / values.length).toFixed(1)
}


const parseWeight = (weightStr) => {
  if (!weightStr) return null
  const [minWeight, maxWeight] = weightStr.split(' - ').map(w => parseFloat(w))
  return [minWeight, maxWeight]
}
const CatByBreed = ({images, catBreed}) =>
  (
  <div>
      <input type='text' placeholder='insert cat id' name='cat_id' id='cat_id'/>
      <button onClick={catBreed}>Search</button>
      <div>
        <img src={images} width={100} height={100} alt='cat'/>
      </div>
  </div>
  )



const Cats = ({averageWeight, averageLifespan}) => (
  <div>
      <h1>On an average a cat can live up {averageLifespan} years and have a average weight of {averageWeight} llb.</h1>
  </div>
)

const NotFound = (props) => <h1>Page not found</h1>

class App extends Component {
  state = {
    data: [],
    catImage: [],
    averageWeight: 'Unknown',
    averageLifespan: 'Unknown',

  }
  componentDidMount()  {
      this.fetchCatData();
  }

  catBreed = async() => {
    const cat_id = document.getElementById('cat_id').value
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${cat_id}`
    try{
      const response = await axios.get(url)
      const data = await response.data
      this.setState({catImage: data[0].url})
      console.log(data[0].url)
    } catch (error){
      console.log(error)
    }
    }


  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try{
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
        ...this.calculateAverages(data),
      })
    } catch (error){
      console.log(error)
    }
  }


  calculateAverages = (data) => {
    const weights = [];
    const lifespans = [];

    data.forEach(breed => {
      const weight = breed.weight?.imperial || ''
      const [minWeight, maxWeight] = parseWeight(weight)
      if (minWeight !== null && maxWeight !== null) {
        weights.push((minWeight + maxWeight) / 2)
      }

      const lifespan = breed.life_span || ''
      const lifespanValues = lifespan.split(' - ').map(span => parseFloat(span))
      if (lifespanValues.length === 2) {
        lifespans.push((lifespanValues[0] + lifespanValues[1]) / 2)
      }
    });
    return {
      averageWeight: calculateAverage(weights),
      averageLifespan: calculateAverage(lifespans),
    }

  }
  render(){
    return(
      <Router>
      <div className='App'>
        <ul>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/catbybreed'>Cat</NavLink></li>
          <li><NavLink to='/'>Cats</NavLink></li>
        </ul>
        <Routes>
          <Route path='/home' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/catbybreed' element={<CatByBreed images={this.state.catImage} catBreed={this.catBreed} />}/>
          <Route path='/' element={<Cats averageLifespan={this.state.averageLifespan} averageWeight={this.state.averageWeight}/>}/>
          <Route path='*' component={NotFound} />
        </Routes>
      </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)