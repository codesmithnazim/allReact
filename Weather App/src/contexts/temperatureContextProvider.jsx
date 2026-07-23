import React, { Children, useContext, useEffect, useState } from "react";
import axios from "axios";
import TempContext from "./temperatureContext";
import { UseCityContext } from "./weatherContextProvider";

function temperatureContextProvider({ children }) {
  const [details, setDetails] = useState({});
  const { city } = UseCityContext();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`,
      );
      const { name, country } = data.location;
      const { temp_c } = data.current;
      const { text } = data.current.condition;
      const { icon } = data.current.condition;
      const { wind_kph } = data.current;
      const { humidity } = data.current;
      const { gust_kph } = data.current;
      const { is_day } = data.current;
      const { code } = data.current.condition;
      const { cloud } = data.current;
      setDetails({
        name,
        country,
        temp_c,
        icon,
        wind_kph,
        humidity,
        gust_kph,
        text,
        code,
        is_day,
        cloud,
      });
      console.log(
        `city = ${name} country = ${country} temp = ${temp_c} text = ${text} humidity = ${humidity}`,
      );
    };
    fetchData();
    console.log(`the details array = ${details}`);
    return () => {};
  }, [city]);

  return (
    <TempContext.Provider value={{ details, setDetails }}>
      {children}
    </TempContext.Provider>
  );
}

export default temperatureContextProvider;

export function usefullTemperature() {
  return useContext(TempContext);
}
