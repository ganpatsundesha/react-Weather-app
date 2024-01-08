import React from "react";
import { useWeather } from "../context/weather";
import { data } from "autoprefixer";

const Input = () => {
    const weather = useWeather();
    console.log(weather);

    const getData = (e) => {
        e.preventDefault();
        weather.fetchData();
        if (data == "") {
            console.log("empty");
        }
    };
    return (
        <>
            <form className="flex">
                <input
                    className="shadow-2xl p-2 text-[20px] font-medium w-full"
                    type="text"
                    placeholder="Search here"
                    value={weather.searchCity}
                    onChange={(e) => weather.setSearchCity(e.target.value)}
                />
                <input
                    onClick={getData}
                    className="font-semibold cursor-pointer py-2 px-5 text-[20px] bg-[#FEF97A]"
                    type="submit"
                    value={"Search"}
                />
            </form>
        </>
    );
};

export default Input;
