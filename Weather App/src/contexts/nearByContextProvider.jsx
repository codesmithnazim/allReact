import React, { useContext, useState } from "react";
import { nearbycityContext } from "./nearByContext";
function nearByContextProvider({ children }) {
  // let sampleCities = localStorage.getItem("nearByCities")==="undefined" || "" || null || false || undefined ? [
  //   "North Jakartha",
  //   "Kandahar",
  //   "London",
  // ]:localStorage.getItem("nearByCities")
  if (!localStorage.getItem("nearByCities"))
    localStorage.setItem(
      "nearByCities",
      JSON.stringify(["North Jakartha", "Kandahar", "London"]),
    );
  let sampleCities = JSON.parse(localStorage.getItem("nearByCities"));
  const [nearByCities, setNearByCities] = useState(sampleCities);
  localStorage.setItem("nearByCities", JSON.stringify(nearByCities));
  console.log("Near By cities in main context = ", nearByCities);
  return (
    <nearbycityContext.Provider value={{ nearByCities, setNearByCities }}>
      {children}
    </nearbycityContext.Provider>
  );
}

export default nearByContextProvider;
const useNearByCitiescontext = () => {
  return useContext(nearbycityContext);
};
export { useNearByCitiescontext };
