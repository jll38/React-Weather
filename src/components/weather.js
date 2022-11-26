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
                <div class="w-container">
                <Form>
                    <Form.Group className="mb-2" controlId="formWeatherLocation">
                      <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="New York, NY" id="weatherInput" />
                     </Form.Group>
                     <Button variant="primary" onClick={() => {handleLocation(document.getElementById('weatherInput').value)}}>Get The Weather</Button>
                </Form>
                <div class="w-sub-output">
                    <h2>New York, NY</h2>
                    <h3>Temp: </h3>
                    <h3>Feels like: </h3>
                    <h3>Percipitation: </h3>
                </div>
                </div>
            </>
        )
    }
}


async function handleLocation(props){
   const weatherRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=${config.WeatherAPIKey}`)
   .then((response) => response.json())
   .then((data) => getWeather(data));
   

}


function getWeather(props){
    console.log(`Getting weather ${JSON.stringify(props)}`)
    const weatherInfo = (
        <>
            {props && <h1>Displaying Weather for: {props}</h1>}
            {!props && <h1>Please input a location!</h1>}

        </>
    )
    return(
        ReactDOM.render(weatherInfo,document.getElementById("weatherOutput"))
    );
}
