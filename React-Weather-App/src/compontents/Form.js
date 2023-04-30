import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>

            <input type="text" placeholder="Enter Your City...." name="city"  />
            <button className="submit"> Search </button>
        </form>
    );
}


export default Form;