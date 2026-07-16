import { useContext } from "react";
import UserContext from "../context/UserContext"

function component3() {
  console.log("component3.jsx is rendered ...");
  const check=  useContext(UserContext)

  return <div style={{ marginTop: "10px" }}>I'm componet number 3</div>;
}

export default component3;
