
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {

  const COLD_URL = " https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D "
  
  const HOT_URL = "https://images.unsplash.com/photo-1506126383447-1baf4fb3c267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D"

  const RAIN_URL = " https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D "
  
  return (
    <div className='InfoBox'>
    
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }} image={info.humidity >80 ? RAIN_URL : info.temp >20 ? HOT_URL : COLD_URL} title="green iguana" />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity >80 ? <ThunderstormIcon/> : info.temp<20 ? <AcUnitIcon/>:<WbSunnyIcon/>}
            <div style={{color:"orange"}}>
              {"  "} 
              {info.temp}&deg;C
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary" component = {"span"}>

          <p>Temperature: {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}&deg;C</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>The Weather can be described as <i> {info.weather} </i> and feels like {info.feelsLike}&deg;C:</p>
          
          </Typography>

        </CardContent>
        
        </Card>
      </div>
      
    </div>
  )
}
