import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
    const Weather = useWeather();
    return (
        <>
            <div className="card text-white">
                <img
                    className="mt-4 min-h-[100px]"
                    src={Weather?.data?.current?.condition?.icon}
                    alt="Weather Image"
                />
                <h2 className="text-3xl font-medium mb-4">
                    Temp:- {Weather?.data?.current?.temp_c}°C
                </h2>
                <h2 className="text-3xl font-medium mb-4">
                    Wind Speed:- {Weather?.data?.current?.wind_kph} km/h
                </h2>
                <h2 className="text-3xl font-medium mb-4">
                    Humidity:- {Weather?.data?.current?.humidity}
                </h2>
                <h5 className="text-3xl font-medium">
                    {Weather?.data?.location?.name},{" "}
                    {Weather?.data?.location?.region},{" "}
                    {Weather?.data?.location?.country}
                </h5>
            </div>
        </>
    );
};

export default Card;
