import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox" 

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 24,
    temp: 25,
    tempMin: 56,
    tempMax:56,
    humidity:47,
    weather:"haze",
  })

  let updateInfo =  (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{textAlign :"center"}}>
      <h2>Weather App by Me </h2>

      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>

    </div>
  )
}
