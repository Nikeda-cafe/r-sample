// import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results';
import axios from "axios";
import { useState } from "react";

function App() {
  const[city,setCity] = useState('');
  const[results,setResults] = useState({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  });
  const getWeather = (e) => {
      e.preventDefault();
      axios.get(`https://api.weatherapi.com/v1/current.json?key=c5ab40fead704685aac141328220710&q=${city}&aqi=no`)
      .then(res => {
          setResults({
            country: res.data.location.country,
            cityName: res.data.location.name,
            temperature: res.data.current.temp_c,
            conditionText: res.data.current.condition.text,
            icon: res.data.current.condition.icon
          })
      })
  }
  return (
    <div className="test">
      <Title cityName={city}></Title>
      <Form setCity={setCity} getWeather={getWeather}></Form>
      <Results results={results}></Results>
    </div>
  );
}

export default App;
