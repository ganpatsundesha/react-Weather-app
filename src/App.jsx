import React, { useEffect } from "react";
import Input from "./components/Input";
import Card from "./components/Card";
import { useWeather } from "./context/weather";

const App = () => {
    const weather = useWeather();

    useEffect(() => {
        weather.fetchCurrentUserLocation();
    }, []);
    return (
        <>
            <div className="p-6 main-box bg-[#17294E] h-[100vh] flex bg bg-[url('http://surl.li/ozcow')]">
                <div className="relative overflow-hidden rounded-3xl border- z-10 flex flex-col m-auto px-[24px] py-[40px] shadow-2xl w-max justify-center bg-gradient-to-br  from-[#9CBDFF] to-[#6498FF]">
                    <h1 className="text-5xl font-semibold mb-8 relative z-10">
                        Weather Forcast
                    </h1>
                    <Input />
                    <Card />
                    <div className="absolute right-5 top-5 flex justify-center items-center">
                        <span className="absolute w-[160px] h-[160px] rounded-full bg-white bg-opacity-10"></span>{" "}
                        <span className="absolute w-[130px] h-[130px] rounded-full bg-white bg-opacity-20"></span>{" "}
                        <span className="absolute w-[88px] h-[88px] rounded-full bg-[#FEF97A] bg-opacity-100"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
