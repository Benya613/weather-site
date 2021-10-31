/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { useState } from "react";
import { WeatherForm } from "../../components/WeatherForm/WeatherForm";

export const CurrentWeatherPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [weatherData, setWeatherData] = useState(null);

    return <div className="current-weather-p">
        <h1>Current Weather data by region or by location</h1>
        <WeatherForm weatherDataSetter={setWeatherData}></WeatherForm>
    </div>;
};
