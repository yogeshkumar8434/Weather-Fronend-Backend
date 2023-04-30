import React, {Component} from "react";
import "./App.css";
import "./fontawesome.min.css";
import Weather from "./compontents/Weather";
import Form from "./compontents/Form";

class App extends Component {

  state = {
    Temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }


  //    Fetch api---------
  getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const api = await fetch(`http://localhost:8000/weather/${city}/`)
    const data = await  api.json();
    if (city) {
      this.setState({
        Temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
        
      })
    } else{
      this.setState({
        Temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter The City ...! '
      })
    }
  }

  render() { 
  return (
    <div className="wrapper">
      <div className="form-container" >
          <div className="head">
              <h2>Weather App</h2>
              <img className="cloud" src="https://freesvg.org/storage/img/thumb/weather.png"></img>
              <br></br>
          </div>

          <Form getWeather={this.getWeather}/>

          <Weather 
          Temperature= {this.state.Temperature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
          />
        
      </div> 
    </div>
  );
  }
}

export default App;
