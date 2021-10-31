/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { useState } from "react";
import { CurrentWeatherService } from "../../services/CurrentWeather/CurrentWeatherService";

export const WeatherForm = ({ weatherDataSetter }) => {
    const [inputValue, changeInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        CurrentWeatherService.getWeatherByLocationName(inputValue)
            .then(res => {
                console.log(res.data);
                weatherDataSetter(res.data);
            })
            .catch(error => {
                console.error(error);
            })

        changeInputValue("");
    }

    return <form onSubmit={e => handleSubmit(e)}>
        <input type="text"
            value={inputValue}
            onChange={(e) => changeInputValue(e.target.value)}
            placeholder="Name of the city/country/etc" />
        <button type="submit">Show me weather!</button>
    </form>;
};
