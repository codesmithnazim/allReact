import React from "react";
import { UseCityContext } from "../contexts/weatherContextProvider";
// const { city } = UseCityContext();

function mainBoxImageContainer({ children }) {
  const { city } = UseCityContext();

  return (
    <div className="main  box-border flex flex-col bg-[url('https://i.pinimg.com/1200x/4a/64/c0/4a64c0c0a0b5ba93e4cb68359ce4c876.jpg')] w-screen h-screen bg-cover bg-center p-4 pr-10 pl-28 gap-16">
      {children}
    </div>
  );
}

export default mainBoxImageContainer;
