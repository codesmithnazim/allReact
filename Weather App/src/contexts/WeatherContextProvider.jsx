import { useContext, useState } from "react";
import Weather from "./weatherContext";
import axios from "axios";


function WeatherContextProvider({ children }) {
  // const [city, setCity] = useState({ lat: "", long: "" });
  const [city, setCity] = useState();
  // function getUserLocation() {
  //   navigator.geolocation.getCurrentPosition(success, failed);
  // }
//  async function success(coordinates) {
//     console.log(coordinates);
//     let locationdetails= await axios.get(`https://api.weatherapi.com/v1/current.json?key=3b56079a4522479786550155261707&q=${coordinates.coords.latitude},${coordinates.coords.longitude}`)
//     console.log("location details ",locationdetails.data)
//     console.log("location details ",locationdetails.data.location.name)
//     let cCity= locationdetails.data.location.name
//     setCity(cCity);
//   }
  // console.log(city);
  async function  getUserLocation() {
    // console.log(`Failed with the message, and we are now getting the IP address now`);
    let responce=await axios.get('https://api.ipify.org?format=json')
    console.log("user ip" ,responce.data.ip)
    let {data}=await axios.get(`https://api.weatherapi.com/v1/ip.json?key=3b56079a4522479786550155261707&q=${responce.data.ip}`)
    console.log(data.city)
    let cCity= data.city
    setCity(cCity)
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
