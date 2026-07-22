import { useEffect, useState } from "react";
import { UseCityContext } from "../../contexts/WeatherContextProvider";
import axios from "axios";
function WeatherForeCastText() {
  const [details, setDetails] = useState({});
  const { city } = UseCityContext();
  const [AIsumary, setAISumary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`,
      );
      var { name, country } = data.location;
      var { temp_c } = data.current;
      var { text } = data.current.condition;
      var { icon } = data.current.condition;
      const { wind_kph } = data.current;
      const { humidity } = data.current;
      const { gust_kph } = data.current;
      setDetails({
        name,
        country,
        temp_c,
        icon,
        wind_kph,
        humidity,
        gust_kph,
        text,
      });
      // console.log(
      //   `city = ${name} country = ${country} temp = ${temp_c} text = ${text} humidity = ${humidity}`,
      // );
      try {
        const responce = await fetch("../../../api/weather-summary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: details.name,
            country: details.country,
            temp_c: details.temp_c,
            wind_kph: details.wind_kph,
            humidity: details.humidity,
            gust_kph: details.gust_kph,
            condition: details.text,
          }),
        });

        console.log(
          "The responce we get from the serverless function = ",
          responce,
        );
        if (responce.ok) {
          const response = await responce.json();
          setAISumary(response.aiSummary);
          console.log("The current summary state data ", AIsumary);
          console.log("Server repsonce ", response.description);
        }
        else
          console.log("Your responce is not ok and error = ", responce.error)
      } catch (error) {
        console.log("catch of LOC 49, and the error = ", error);
      }
    };
    fetchData();

    return () => {};
  }, [city]);
  return (
    <div className="aboutWeather w-130 border-2 border-blue-700 text-2xl text-white">
      {AIsumary ? (
        <>
          {console.log("AI summary headline", AIsumary?.headline)}
          {console.log("AI summary description", AIsumary?.description)}
          <h1 className="text-3xl font-bold">{AIsumary?.headline}</h1>
          <div className="">{AIsumary?.description}</div>
        </>
      ) : (
        <div>{"you weather forecast is loading .... "}</div>
      )}
    </div>
  );
}

export default WeatherForeCastText;
