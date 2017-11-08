import axios from 'axios';

const API_KEY = 'ae4237485cf3076d8c5ea8899d6bd929';

const Root_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function feater(){

    const url = `${Root_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}