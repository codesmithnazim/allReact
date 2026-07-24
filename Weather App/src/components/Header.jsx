import { Plus } from "lucide-react";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useNearByCitiescontext } from "../contexts/nearByContextProvider";
import { UseCityContext } from "../contexts/WeatherContextProvider";

function Header() {
  const { nearByCities, setNearByCities } = useNearByCitiescontext();
  const { city } = UseCityContext();

  function savedCitiesUpdater(e) {
    if (!nearByCities.includes(city)) {
      let array = [...nearByCities];
      array.pop();
      array.unshift(city);
      setNearByCities(array);
    }
    e.target.parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    setTimeout(() => {
      e.target.parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }, 200);
    console.log(nearByCities);
  }
  return (
    <div className="header flex justify-between py-1 bg-transparent  border border-red-400 z-10">
      <div className="welcome text-zinc-200 text-start">
        Welcome <br /> <strong className="text-zinc-100">Calfin Danang</strong>
      </div>
      <div className="smallNavbar flex gap-5 ">
        <div className="smallNavbarIcons">
          <Plus
            className="icons cursor-pointer transition-all duration-1000 ease-in"
            size={16}
            onClick={savedCitiesUpdater}
          />
        </div>
        <SearchBar />
        <div className="smallNavbarIcons">
          <IoMdNotificationsOutline className="icons" size={22} />
        </div>
        <div className="smallNavbarIcons">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiRllCOeWCQyHWIRBoNziULMRqIYvKORrjk6wEaVM7w&s=10"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
