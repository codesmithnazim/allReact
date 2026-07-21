import { Cloud } from "lucide-react";
import { useNearByCitiescontext } from "../../contexts/nearByContextProvider";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function NearByCards() {
  const { nearByCities, setNearByCities } = useNearByCitiescontext();
  const [savedcitiesallinfo, setSetsavedcitiesallinfo] = useState([]);
  // localStorage.setItem("nearByCities", nearByCities)
  console.log("Re-rendered again, and now check the updated cities array ", nearByCities)
  
  useEffect(() => {
    const fetchData = async () => {
      setSetsavedcitiesallinfo([]);
      nearByCities.forEach(async (city) => {
        let { data } = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=3b56079a4522479786550155261707&q=${city}`,
        );
        let { name, country } = data.location;
        let { temp_c } = data.current;
        let { text } = data.current.condition;
        let { icon } = data.current.condition;
        let { wind_kph } = data.current;
        let { humidity } = data.current;
        let { gust_kph } = data.current;
        setSetsavedcitiesallinfo((prev) => [
          ...prev,
          {
            name,
            country,
            temp_c,
            text,
            icon,
            wind_kph,
            humidity,
            gust_kph,
          },
        ]);
        console.log(
          `city = ${name} country = ${country} temp = ${temp_c} text = ${text} humidity = ${humidity}`,
        );
      });
      // console.log(`the detailed array = ${await savedcitiesallinfo} `);
    };
    fetchData();
    console.log(`the detailed array = ${savedcitiesallinfo} `);

    return () => {};
  }, [nearByCities]);

  return (
    <>
      {console.log("The final check ", savedcitiesallinfo)}
      {savedcitiesallinfo.map((city) => {
        return (
          <div
            key={uuidv4()}
            className="first NearBy glassMorphism p-3 flex flex-col gap-1"
          >
            <div className="country text-sm text-zinc-300">{city.country}</div>
            <div className="weather flex justify-between">
              <div className="about flex flex-col gap-0.5">
                <div className="cityName text-sm text-white font-medium font-serif  tracking-wider">
                  {city.name}
                </div>
                <div className="status text-sm text-zinc-300">{city.text}</div>
              </div>
              <div className="qunatity flex items-center gap-0.5 text-white font-medium font-serif self-auto ">
                {city.temp_c}&deg;
                {/* <Cloud size={18} className="icons" /> */}
                <img src={`${city.icon}`} alt="" height={25} width={25} color="white"/>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="first NearBy glassMorphism p-3 flex flex-col gap-1">
        <div className="country text-sm text-zinc-300">Indonesia</div>
        <div className="weather flex justify-between">
          <div className="about flex flex-col gap-0.5">
            <div className="cityName text-sm text-white font-medium font-serif  tracking-wider">
              North Jakartha
            </div>
            <div className="status text-sm text-zinc-300">Mostly Sunny</div>
          </div>
          <div className="qunatity flex items-center gap-0.5 text-white font-medium font-serif self-auto ">
            12&deg;
            <Cloud size={18} className="icons" />
          </div>
        </div>
      </div>
      <div className="first NearBy glassMorphism p-3 flex flex-col gap-1">
        <div className="country text-sm text-zinc-300">{"Indonesia"}</div>
        <div className="weather flex justify-between">
          <div className="about flex flex-col gap-0.5">
            <div className="cityName text-sm text-white font-medium font-serif  tracking-wider">
              {"Bandung"}
            </div>
            <div className="status text-sm text-zinc-300">{"Cloudy"}</div>
          </div>
          <div className="qunatity flex items-center gap-0.5 text-white font-medium font-serif self-auto ">
            10&deg;
            <Cloud size={18} className="icons" />
          </div>
        </div>
      </div>
      <div className="first NearBy glassMorphism p-3 flex flex-col gap-1">
        <div className="country text-sm text-zinc-300">{"Indonesia"}</div>
        <div className="weather flex justify-between">
          <div className="about flex flex-col gap-0.5">
            <div className="cityName text-sm text-white font-medium font-serif  tracking-wider">
              {"South Jakartha"}
            </div>
            <div className="status text-sm text-zinc-300">{"Sunny"}</div>
          </div>
          <div className="qunatity flex items-center gap-0.5 text-white font-medium font-serif self-auto ">
            14&deg;
            <Cloud size={18} className="icons" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default NearByCards;
