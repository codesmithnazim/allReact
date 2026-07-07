import React, { useContext } from "react";
// import {Color} from "../../App"
import { UseTheme } from "../contexts/UseTheme";

function Header() {
  const { bgcolor, setBgcolor } = UseTheme();
  console.log("The actual value of context", bgcolor);
  return (
    <>
      <button
        onClick={(e) => {
          setBgcolor("Red");
        }}
      >Click me</button>
      <div>Hi, I am Header with {bgcolor} color</div>
    </>
  );
}

export default Header;
