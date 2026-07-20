import { FaLocationDot } from "react-icons/fa6";
import { BsWind } from "react-icons/bs";
import { WiCloudyGusts } from "react-icons/wi";
import { Droplets } from "lucide-react";
import NearByCards from "./NearByCards";

function WeathercardsMain() {
  return (
    <div className="flex flex-col Weather-cards w-65  border-2 border-fuchsia-600 text-2xl text-white self-end mr-5 gap-4.5">
      <div className="glassMorphism p-3 pb-1.5 flex flex-col gap-2.5">
        <div className="cards flex gap-0.5 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
          <FaLocationDot className="icons" size={16} />
          {" Central Jakartha"}
        </div>
        <div className="cards text-6xl font-semibold font-serif ">10&deg;C</div>
        <div className="cards flex justify-between    gap-1 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
          <div className=" flex gap-0.5 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
            <BsWind className="icons " size={18} /> 19m/h
          </div>
          <div className=" flex gap-0.5 text-sm tracking-wider items-center pl-1.5 text-white font-medium font-serif">
            <Droplets className="icons" size={18} /> 65h
          </div>
          <div className=" flex gap-0.5 items-center text-sm tracking-wider  pl-1.5 text-white font-medium font-serif">
            <WiCloudyGusts className="icons" size={20} />
            214m/h
          </div>
        </div>
      </div>
      <NearByCards />
    </div>
  );
}

export default WeathercardsMain;
