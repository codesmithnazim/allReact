import { useEffect, useState } from "react";
import { UseCityContext } from "../../contexts/WeatherContextProvider";
import axios from "axios";
import { usefullTemperature } from "../../contexts/temperatureContextProvider";
function WeatherForeCastText() {
  // const [details, setDetails] = useState({});
  // const { city } = UseCityContext();
  const { details } = usefullTemperature(); //global context
  const [AIsumary, setAISumary] = useState();
  const [forCastAvailable, setForCastAvailable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setForCastAvailable(false);
      console.log(
        "The current weather details object from weatherForecast component= ",
        details.name,
        details.temp_c,
        details.text,
      );
      if (details.name || details.temp_c || details.text){
        try {
          const responce = await fetch("../../../api/weather-summary", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: details.name,
              country: details.country,
              text: details.text,
              temp_c: details.temp_c,
              wind_kph: details.wind_kph,
              humidity: details.humidity,
              gust_kph: details.gust_kph,
              is_day:details.is_day,
              cloud:details.cloud
            }),
          });
          console.log(
            "The responce we get from the serverless function = ",
            responce,
          );
          if (responce.ok) {
            const response = await responce.json(); // responce.json() give us the res.json() portion that are sended by the server in json format.
            setAISumary(JSON.parse(response?.aiSummary));
            setForCastAvailable(true); // while JSON.parse() only used to convert back json string into json object
            console.log("response.json() output = ", aiSummary?.description);
          } else {
            let response = await responce?.json();
            console.log(
              "Your responce is not ok and error = ",
              response?.error,
            );
          }
        } catch (error) {
          console.log("catch of LOC 49, and the error = ", error);
        }
      }
    };
    // fetchData();

    return () => {};
  }, [details]);

  return (
    <div className="aboutWeather flex flex-col gap-3 w-120  text-2xl text-white">
      {forCastAvailable ? (
        <>
          {/* {console.log("AI summary headline", AIsumary?.headline)}
          {console.log("AI summary description", AIsumary?.description)} */}
          <h1 className="font-display text-3xl font-medium wrap-break-word w-4/6 leading-normal">
            {AIsumary?.headline}
          </h1>
          <div className="font-display text-[1rem]  text-zinc-200 leading-normal">
            {AIsumary?.description}
          </div>
        </>
      ) : (
        <div className="font-display text-3xl font-medium wrap-break-word">
          {"you weather forecast is loading .... "}
        </div>
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
