import "../App.css";
import { FingerprintPattern } from "lucide-react";
import { BsFillGridFill } from "react-icons/bs";
import { Settings } from "lucide-react";
import { TbWorldSearch } from "react-icons/tb";
import { CalendarDaysIcon } from "lucide-react";
// import { GrAnalytics } from "react-icons/gr";
import { BiExit } from "react-icons/bi";
import { SquareChartGantt } from 'lucide-react';

function LeftSideBar() {
  return (
    <div className="leftSideBar h-21/22 flex flex-col justify-between items-center  px-2 pt-3 pb-10 w-fit glassMorphism absolute left-5">
      <div className="logAndNavbar flex flex-col gap-10 items-center">
        <div className="logo">
          <FingerprintPattern
            size={45}
            strokeWidth={1.75}
            className="text-slate-100"
          />
        </div>
        <div className="navbar flex flex-col gap-8">
          <BsFillGridFill size={20} className="text-slate-100" strokeWidth={1.2} />
          <SquareChartGantt size={20} className=" icons" strokeWidth={1.45}  />
          <TbWorldSearch  size={20} className="text-slate-200/80" strokeWidth={1.45} />
          <CalendarDaysIcon size={18} className="icons" strokeWidth={1.45} />
          <Settings size={20} className="icons" strokeWidth={1.45} />
        </div>
      </div>
      <div>
        <BiExit size={18} className="icons rotate-180" strokeWidth={0.5}  />
      </div>
    </div>
  );
}

export default LeftSideBar;
