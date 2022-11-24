import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { config } from "../index";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Weather Data as component from Location String
export default class Weather extends React.Component{
    constructor(props){
        super(props);
            this.state  = {
                city: 'New York, NY',
            }
    }
    render(){
        return(
            <>
                <Form>
                    <Form.Group className="mb-2 w-50" controlId="formWeatherLocation">
                      <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="New York, NY" id="weatherInput" />
                     </Form.Group>
                     <Button variant="primary" onClick={() => {getWeather(document.getElementById('weatherInput').value)}}>Get The Weather</Button>
                </Form>
                <div id="weatherOutput"></div>
            </>
        )
    }
}


async function handleLocation(props){
   const weatherRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=${config.WeatherAPIKey}`)
   .then((response) => response.json())
   .then((data) =>console.log(data))
}


function getWeather(props){
    const location = handleLocation(props)
    const weatherInfo = (
        <>
            <h1>{props}</h1>

        </>
    )
    return(
        ReactDOM.render(weatherInfo,document.getElementById("weatherOutput"))

    );
}
