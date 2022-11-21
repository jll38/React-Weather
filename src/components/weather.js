import React, {useState} from "react";


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
                <h2>{process.env.REACT_APP_WEATHER_API_KEY}</h2>
                {handleLocation('New York, NY')}
            </>
        )
    }
}

//Pass weather object from Fetch API call
function handleLocation(props){
    return(
        <>
        <h2>{props}</h2>
        </>

    );
}