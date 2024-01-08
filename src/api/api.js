const baseUrl =
    "https://api.weatherapi.com/v1/current.json?key=52f396a5bb994de0ae680249240601%20&q=";

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseUrl}${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataLocation = async (lat, lon) => {
    const response = await fetch(`${baseUrl}${lat},${lon}&aqi=yes`);
    return await response.json();
};
