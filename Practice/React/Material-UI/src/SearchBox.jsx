import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async (city) => {
    try {
      let apikey = "4fcf26188c014316b575bf4d38337154";
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
      let resp = await fetch(url);
      let jsonResp = await resp.json();

      let result = {
        city: city.toUpperCase(),
        temp: jsonResp.main.temp,
        tempMin: jsonResp.main.temp_min,
        tempMax: jsonResp.main.temp_max,
        humidity: jsonResp.main.humidity,
        feelsLike: jsonResp.main.feelsLike,
        weather: jsonResp.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" size="large" type="submit">
          Search
        </Button>
        <br />
        <br />
        {error && <Alert severity="error">This is an error Alert.</Alert>}
        <br />
      </form>
    </div>
  );
};

export default SearchBox;
