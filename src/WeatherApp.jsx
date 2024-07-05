import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){

    let [info , setInfo] = useState({
            city: 'Dhanbad',
            temp: 28.11,
            maxTemp: 28.11,
            minTemp: 28.11,
            feelsLike: 32.22,
            humidity:77,
            windSpeed:44,
            weather:"dusty"});

     let updateInfo = ( newInfo)=>{
        setInfo( newInfo);
     }       
  return(
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={info} />
    </div>
  );
}