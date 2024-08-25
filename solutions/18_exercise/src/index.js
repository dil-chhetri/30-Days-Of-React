import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Function to calculate average from an array of numbers
const calculateAverage = (values) => {
  if (values.length === 0) return 'Unknown';
  const total = values.reduce((acc, value) => acc + value, 0);
  return (total / values.length).toFixed(1);
};

// Function to parse weight and lifespan
const parseWeight = (weightStr) => {
  if (!weightStr) return null;
  const [minWeight, maxWeight] = weightStr.split(' - ').map(w => parseFloat(w));
  return [minWeight, maxWeight];
};

const Cats = ({ averageWeight, averageLifespan }) => {
  return (
    <div className='cats'>
      <h1>On average, a cat can weigh about {averageWeight} lbs and live up to {averageLifespan} years.</h1>
    </div>
  );
};

class App extends Component {
  state = {
    data: [],
    averageWeight: 'Unknown',
    averageLifespan: 'Unknown',
  };

  componentDidMount() {
    this.fetchCatData();
  }

  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      this.setState({
        data: data,
        ...this.calculateAverages(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  calculateAverages = (data) => {
    const weights = [];
    const lifespans = [];

    data.forEach(breed => {
      // Process weight
      const weight = breed.weight?.imperial || '';
      const [minWeight, maxWeight] = parseWeight(weight);
      if (minWeight !== null && maxWeight !== null) {
        weights.push((minWeight + maxWeight) / 2);
      }

      // Process lifespan
      const lifespan = breed.life_span || '';
      const lifespanValues = lifespan.split(' - ').map(span => parseFloat(span));
      if (lifespanValues.length === 2) {
        lifespans.push((lifespanValues[0] + lifespanValues[1]) / 2);
      }
    });

    return {
      averageWeight: calculateAverage(weights),
      averageLifespan: calculateAverage(lifespans),
    };
  };

  render() {
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats Paradise</h2>
        <h2>There are {this.state.data.length} breeds of cats</h2>
        <div className='cat-wrapper'>
          <Cats 
            averageWeight={this.state.averageWeight} 
            averageLifespan={this.state.averageLifespan} 
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
