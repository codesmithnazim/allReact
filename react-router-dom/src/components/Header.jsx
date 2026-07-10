import {  NavLink, Link, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Header(params) {
  let navigate = useNavigate();

  return (
    <div
      className={`header flex justify-between items-center gap-2.5 w-full px-12 py-5 ${
        params.isDark ? "bg-zinc-500 text-slate-100" : "bg-cyan-200 text-pink-500"
      }`}
      // NOTE: removed the inline `style` prop that was here — it had a syntax
      // error (`$params.isDark` isn't valid template interpolation, and both
      // branches were "yellow" anyway), and it was redundant with the
      // className above, which already drives the background color.
    >
      <div
        className="left cursor-pointer text-2xl text-black"
        onClick={() => {
          navigate(-1);
        }}
      >
        ←
      </div>

      <div className="logo text-2xl">CodeSmithNazim</div>

      <div className="rightContent flex gap-20 text-xl">
        <NavLink to="/" className={(e)=>{return (e.isActive &&  "text-blue-500")}}>
          home
        </NavLink>
        <NavLink className={(e)=>{return (e.isActive &&  "text-blue-500")}} to="/products">products</NavLink>
        <NavLink className={(e)=>{return (e.isActive &&  "text-blue-500")}} to="/blogs" >
          blogs
        </NavLink>
        <NavLink className={(e)=>{return (e.isActive && "text-blue-500")}} to="/about" >
          about
        </NavLink>
        <NavLink className={(e)=>{ return (e.isActive &&  "text-blue-500")}} to="/contact" >
          contact
        </NavLink>
      </div>

      {/* ---------- Sun / Moon theme toggle ---------- */}
      <button
        className={`relative flex justify-center items-center  rounded-full w-14 h-8 p-1 gap-2 box-border cursor-pointer ${params.isDark ? "bg-indigo-800" : "bg-zinc-700"} `}
        onClick={() => {
          params.toggleTheme();
        }}
      >
        <Sun
          className={`${params.isDark ? "opacity-30 text-yellow-200" : "opacity-100 text-yellow-500"} transition-all duration-300`}
        />
        <Moon
          className={`${params.isDark ? "opacity-100 text-zinc-950" : "opacity-30 text-zinc-400"} transition-all duration-300`}
        />

        <div
          className={`thumb flex justify-center items-center absolute h-6 w-6 bg-white rounded-full transition-transform duration-1000 ease-in-out  ${params.isDark ? "bg-zinc-800 right-1" : "bg-white left-1 "}`}
        >
          {params.isDark ? (
            <Moon className="text-indigo-100" size={15} />
          ) : (
            <Sun className="text-yellow-500" size={15} />
          )}
        </div>
      </button>
    </div>
  );
}

export default Header;
