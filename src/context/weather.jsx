import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataLocation } from "../api/api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState("");
    const [errorText, setErrorText] = useState(false)


    const fetchData = async () => {
        if (searchCity.trim() === '') {
            setErrorText(true)
        }
        else {
            setErrorText(false)
            const response = await getWeatherData(searchCity);
            if (response.error) {
                setErrorText(true)
            }
            else {
                setData(response);
            }
        }
    };

    const fetchCurrentUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data));
        });
    };
    return (
        <WeatherContext.Provider
            value={{
                data,
                searchCity,
                setSearchCity,
                fetchData,
                fetchCurrentUserLocation,
                errorText,
                setErrorText,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};
