import React from "react";


const Weather = (props) =>  {
        return (
            <div className="info ">
                <div className="flex">

                    { props.city && 
                    <h4 className="city">
                         {props.city} | {props.country} <hr></hr>
                    </h4>
                    } 

                    { props.Temperature && 
                    <p className="info_key">
                        <img className="img2" width="50px" height="50px" src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/temperature-thermometer-icon.svg"></img>
                        <span className="info_value">{`${Math.floor(props?.Temperature )}°C`} <span>Temperature</span> </span>
                    </p>
                    }

                    { props.humidity && 
                    <p className="info_key">
                        <img className="img2" width="50px" height="50px" src="https://uxwing.com/wp-content/themes/uxwing/download/weather/drop-icon.svg"></img>
                        <span className="info_value"> {props.humidity }% <span>Humidity</span> </span>
                    </p>
                    }

                    { props.description && 
                    <p className="info_key">
                        <img className="img2" width="50px" height="50px"  src="https://uxwing.com/wp-content/themes/uxwing/download/weather/day-cloud-rainbow-icon.svg"></img>
                        <span className="info_value"> {props.description} <span>Description</span> </span>
                    </p>
                    }

                    { props.error && <p className="error"> {props.error}</p> }

                    
                </div>  
            </div>
        );
}

export default Weather;