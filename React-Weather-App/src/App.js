import React,{useState} from "react";
import "./App.css";
import "./fontawesome.min.css";
import Weather from "./compontents/Weather";
import Form from "./compontents/Form";

const App =()=> {

const[Temperature, setTemperature] = useState('');
const[city, setCity] = useState('');
const[humidity, setHumidity] = useState('');
const[description, setDescription] = useState('');
const[error, setError] = useState('');
const[country, setCountry] = useState('');

  //    Fetch API From the django API end point.
  const getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const api = await fetch(`http://localhost:8000/weather/${city}/`)
    const data = await  api.json();
    if (city) {
      setTemperature(data.main.temp);
      setCity(data.name);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setError('');
      setCountry(data.sys.country);
    } else{
      setTemperature('');
      setCity('');
      setHumidity('');
      setDescription('');
      setError('Invalid City');
      setCountry('');
    }
  }
  return (
    <div className="wrapper">
      <div className="form-container" >
          <div className="head">
              <h2>Weather App</h2>
              <img className="cloud" src="https://freesvg.org/storage/img/thumb/weather.png"></img>
              <br></br>
          </div>
          <Form getWeather={getWeather}/>
          <Weather 
          Temperature= {Temperature}
          city= {city}
          country= {country}
          humidity= {humidity}
          description= {description}
          error= {error}
          />
        
      </div> 
    </div>
  );
  }

export default App;
