import { useContext, useState } from "react";
import Weather from "./weatherContext";

function WeatherContextProvider({ children }) {
  const [city, setCity] = useState({ lat: "", long: "" });
  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(success, failed);
  }
  function success(coordinates) {
    console.log(coordinates);
    setCity({
      lat: coordinates.coords.latitude,
      long: coordinates.coords.longitude,
    });
  }
  console.log(city);
  function failed(message) {
    console.log(`Failed with the message ${message}`);
  }
  if (city.lat === "" && city.long === "") getUserLocation();

  return (
    <Weather.Provider value={{ city, setCity }}>{children}</Weather.Provider>
  );
}

export default WeatherContextProvider;
function UseCityContext() {
  return useContext(Weather);
}
export { UseCityContext };
