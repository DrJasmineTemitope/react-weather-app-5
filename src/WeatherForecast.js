import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
}
