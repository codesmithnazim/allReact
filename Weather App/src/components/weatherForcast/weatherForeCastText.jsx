import { useEffect, useState } from "react";
import { UseCityContext } from "../../contexts/WeatherContextProvider";
import axios from "axios";
function WeatherForeCastText() {
  const [details, setDetails] = useState({});
  const { city } = UseCityContext();
  const [AIsumary, setAISumary] = useState();
  const [forCastAvailable, setForCastAvailable] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setForCastAvailable(false)
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
          const response = await responce.json(); // responce.json() give us the res.json() portion that are sended by the server in json format.
          setAISumary(JSON.parse(response.aiSummary));
          setForCastAvailable(true)   // while JSON.parse() only used to convert back json string into json object
          console.log("response.json() output = ", aiSummary?.description);
        } else {
          let response = await responce.json();
          console.log("Your responce is not ok and error = ", response.error);
        }
      } catch (error) {
        console.log("catch of LOC 49, and the error = ", error);
      }
    };
    fetchData();

    return () => {};
  }, [city]);
  return (
    <div className="aboutWeather flex flex-col gap-6 w-120  text-2xl text-white">
      {forCastAvailable ? (
        <>
          {console.log("AI summary headline", AIsumary?.headline)}
          {console.log("AI summary description", AIsumary?.description)}
          <h1 className="font-display text-3xl font-medium wrap-break-word w-4/6">{AIsumary?.headline}</h1>
          <div className="font-display text-[1rem] tracking-tight text-zinc-200 leading-normal">{AIsumary?.description}</div>
        </>
      ) : (
        <div className="font-display text-3xl font-medium wrap-break-word">{"you weather forecast is loading .... "}</div>
      )}
      {/* <h1 className="">{"Weather Data Unavailable"}</h1>
      <div className="">
        {
          "Current meteorological observations and temperature readings are temporarily unavailable for this area. Wind speeds, humidity levels, and precipitation risks cannot be verified at this time. Please check back shortly for updated forecast information."
        }
      </div> */}
    </div>
  );
}

export default WeatherForeCastText;
