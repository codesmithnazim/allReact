import { Cloud } from "lucide-react";

function NearByCards() {
  return (
    <>
      <div className="first NearBy glassMorphism p-3 flex flex-col gap-1">
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
      </div>
    </>
  );
}

export default NearByCards;
