import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoBox = ({info}) => {
  let init_url = "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  let hot_url = "https://media.istockphoto.com/id/1907661115/photo/bright-sun-with-beams-and-bokeh-light-in-the-sky.jpg?s=612x612&w=is&k=20&c=hixrNKd3DUBhKq5fCo7z_MerZIMzzCuYQn77aWjLse4=";
  let cold_url = "https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  let rainy_url = "https://media.istockphoto.com/id/1361688392/photo/cloudy-sky-flash-heavy-rain-cloudy-sky-flash-heavy-rain.jpg?s=612x612&w=0&k=20&c=CopLDk1kgBwjdLKkhy_o5g2CaqzMUUeVyOh1CVtlx-Q=";
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy_url:info.temp>15?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;&nbsp;&nbsp;
            {info.humidity > 80 ? <ThunderstormIcon/> :
              info.temp > 15 ?
                <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {info.weather}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp} &deg; C</div>
          <div>Feels Like = {info.feelsLike} &deg; C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Minimum Temperature = {info.tempMin} &deg; C</div>
          <div>Maximum Temperature = {info.tempMax} &deg; C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox