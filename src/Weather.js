import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDate from "./WeatherDate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul className="WeatherUL">
        <li>
          <WeatherDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6 mt-3">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={36} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul className="WeatherUL">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
