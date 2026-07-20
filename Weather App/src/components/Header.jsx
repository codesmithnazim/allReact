import { Plus } from "lucide-react";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header flex justify-between py-1 bg-transparent  border border-red-400">
      <div className="welcome text-zinc-200 text-start">
        Welcome <br /> <strong className="text-zinc-100">Calfin Danang</strong>
      </div>
      <div className="smallNavbar flex gap-5 ">
        <div className="smallNavbarIcons">
          <Plus className="icons" size={16} />
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
