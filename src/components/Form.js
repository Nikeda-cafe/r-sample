
import axios from "axios";
import { useState } from "react";


const Form = ()=> {
    const[city,setCity] = useState('');
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("https://api.weatherapi.com/v1/current.json?key=c5ab40fead704685aac141328220710&q=London&aqi=no")
        .then(res => {
            console.log(res);
        })
    }
    return (
        <form>
            <input type="text" name="city" onChange={e => setCity(e.target.value)}/>
            
            <button onClick={getWeather}>Get Weather</button>
        </form>
    );
}

export default Form