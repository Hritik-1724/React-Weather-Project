
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
  const initUrl = "../Asset/Dusty-Weather.jpg";
  const rainUrl = "../Asset/Rainy-img.jpg";
  const coldUrl = "../Asset/Cold-img.jpg";
  const hotUrl = "../Asset/Hot-img.jpg";

//   let info = {city: 'Dhanbad',
//      temp: 28.11,
//       maxTemp: 28.11,
//        minTemp: 28.11,
//         feelsLike: 32.22,
//         humidity:77,
//         windSpeed:44,
//         weather:"dusty"};

    return(
        <div className="info-box">
            <h2>Weather Info - </h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
           info.humidity > 75 ? rainUrl : info.temp > 18 ? hotUrl : coldUrl
           
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperatur = {info.temp}&deg;C</p>
        <p>Max Temp = {info.maxTemp}&deg;C</p>
          <p>Min Temp = {info.minTemp}&deg;C</p>
         <p>Wind-Speed = {info.windSpeed}&nbsp;km/h</p>
          <p>Humidity = {info.humidity}%</p>
          <p>The weather can be described as <i>{info.weather}</i> feels like <b> {info.feelsLike}&deg;C</b></p>
          
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    );
}