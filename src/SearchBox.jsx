import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_KEY = "3269c9f50a3a9041ec0a0746aa0d1759";
    let API = "https://api.openweathermap.org/data/2.5/weather?";
    // q={city name}&appid={API key}  
    let getWeatherInfo = async ()=>{
          try{
            let response = await fetch(`${API}q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                maxTemp:jsonResponse.main.temp_max,
                minTemp:jsonResponse.main.temp_min,
                feelsLike:jsonResponse.main.feels_like,
                pressure:jsonResponse.main.pressure,
                humidity:jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed * 18 / 5,
                weather: jsonResponse.weather[0].description,
                
            };
            console.log(result);
            return result;
          }catch(error){
            throw error;
          }
    };


    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
    }

    return(
        <div className='search-box'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city-name"
             label="city name"
              variant="outlined" 
              required
              value={city}
              onChange={handleChange}
               />
            <br /><br />
            <Button variant="outlined" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p> }
            </form>
        </div>
    );
}