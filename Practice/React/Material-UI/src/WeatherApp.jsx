import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
const WeatherApp = () => {
  let [weatherInfo, setWeatherInfo] = useState({
    "city":"Delhi",
    "feelsLike": 24.84,
    "temp": 36.41,
    "tempMin": 36.41,
    "tempMax": 36.41,
    "humidity": 20,
    "weather": "clear sky"
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div>
      <h2>Weather App ⛅</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp