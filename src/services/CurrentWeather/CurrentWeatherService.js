/* eslint-disable indent */
/* eslint-disable prettier/prettier */

import axios from "axios";
import { API_CONFIG } from "../../config/api";

export const CurrentWeatherService = {
    getWeatherByLocationName: async (locationName) => {
        const url = `${API_CONFIG.baseUrl}/data/2.5/weather?q=${locationName}&appid=${API_CONFIG.apiKey}`;

        console.log(url);
        return axios.get(url);
    }
};