import React, {useState} from "react";
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
                <h1>Weather</h1>
                <Form>
                    <Form.Group className="mb-2 w-50" controlId="formWeatherLocation">
                      <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="New York, NY" />
                     </Form.Group>
                </Form>
                {getWeather('London')}
            </>
        )
    }
}


async function handleLocation(props){
//    const weatherRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=${config.WeatherAPIKey}`)
//    .then((response) => response.json())
//    .then((data) =>console.log(data))
}


function getWeather(props){
    handleLocation(props)
    return(
        <>
        <h2>{props}</h2>
        </>

    );
}
