import { FaLocationDot } from "react-icons/fa6";
import { BsWind } from "react-icons/bs";
import { WiCloudyGusts } from "react-icons/wi";
import { Droplets } from "lucide-react";
import NearByCards from "./NearByCards";
import { Bookmark } from "lucide-react";
import { useNearByCitiescontext } from "../../contexts/nearByContextProvider";
import { UseCityContext } from "../../contexts/WeatherContextProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { usefullTemperature } from "../../contexts/temperatureContextProvider";
function WeathercardsMain() {
  const { nearByCities, setNearByCities } = useNearByCitiescontext();
  // const [details, setDetails] = useState({});
  const { city } = UseCityContext(); //global Conext
  const { details } = usefullTemperature(); //global context
  console.log("The current weather details object from weather-Cards-Main component= ", details.name, details.temp_c, details.text)


  function savedCitiesUpdater(e) {
    if (!nearByCities.includes(city)) {
      let array = [...nearByCities];
      array.pop();
      array.unshift(city);
      setNearByCities(array);
    }
    e.target.style.fill = "white";
    setTimeout(() => {
      e.target.style.fill = "none";
    }, 1500);
    console.log("Saved cities updated ", nearByCities);
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`,
  //     );
  //     var { name, country } = data.location;
  //     var { temp_c } = data.current;
  //     var { text } = data.current.condition;
  //     var { icon } = data.current.condition;
  //     const { wind_kph } = data.current;
  //     const { humidity } = data.current;
  //     const { gust_kph } = data.current;
  //     setDetails({
  //       ...details,
  //       name,
  //       country,
  //       temp_c,
  //       icon,
  //       wind_kph,
  //       humidity,
  //       gust_kph,
  //     });
  //     console.log(
  //       `city = ${name} country = ${country} temp = ${temp_c} text = ${text} humidity = ${humidity}`,
  //     );
  //   };
  //   fetchData();
  //   console.log(`the details array = ${details}`);
  //   return () => {};
  // }, [city]);

  return (
    <div className="flex flex-col Weather-cards w-65  border-2 border-fuchsia-600 text-2xl text-white absolute mr-5 gap-4.5 right-8 top-43">
      <div className="glassMorphism p-3 pb-1.5 flex flex-col gap-2.5">
        <div className="cards flex gap-1 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
          <FaLocationDot className="icons" size={16} />
          {details.name}
          <Bookmark
            className="text-zinc-100 cursor-pointer ml-auto transition-all duration-1000 ease-in "
            size={20}
            onClick={savedCitiesUpdater}
          />
        </div>
        <div className="cards text-6xl font-semibold font-serif ">
          {details.temp_c}&deg;C
        </div>
        <div className="cards flex justify-between    gap-1 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
          <div className=" flex gap-0.5   items-center pl-1.5 text-white font-light text-xs font-serif">
            <BsWind className="icons " size={18} /> {details.wind_kph}km/h
          </div>
          <div className=" flex gap-0.5 text-xs tracking-wider items-center pl-1.5 text-white font-medium font-serif">
            <Droplets className="icons" size={18} /> {details.humidity}
          </div>
          <div className=" flex gap-0.5 items-center text-xs tracking-wider  pl-1.5 text-white font-medium font-serif">
            <WiCloudyGusts className="icons" size={20} />
            {details.gust_kph}km/h
          </div>
        </div>
      </div>
      <NearByCards />
    </div>
  );
}

export default WeathercardsMain;
