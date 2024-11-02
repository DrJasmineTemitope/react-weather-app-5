import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">Thur</div>
            <WeatherIcon code="01d" size={36} />
            <div className="ForecastTemperature">
              <span className="ForecastTemperature-max">19º</span>
              <span className="ForecastTemperature-min">10º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f029b2b922567275529f515833feaaac";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
