import { useContext, useState } from "react";
import Weather from "./weatherContext";
import axios from "axios";

function WeatherContextProvider({ children }) {
  const [city, setCity] = useState();
  async function getUserLocation() {
    let responce = await axios.get("https://api.ipify.org?format=json");
    console.log("user ip", responce.data.ip);
    let { data } = await axios.get(
      `https://api.weatherapi.com/v1/ip.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${responce.data.ip}`,
    );
    console.log(data.city);
    let cCity = data.city;
    setCity(cCity);
  }
  if (!city) getUserLocation();

  return (
    <Weather.Provider value={{ city, setCity }}>{children}</Weather.Provider>
  );
}

export default WeatherContextProvider;
function UseCityContext() {
  return useContext(Weather);
}
export { UseCityContext };
