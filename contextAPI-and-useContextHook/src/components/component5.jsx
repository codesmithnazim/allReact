import { useContext } from "react";
import { Theme } from "../context/theme";
import UserContext from "../context/UserContext";

function component5() {
  // const {isDark,setIsDark} = useContext(Theme)
  const {user,setUSer} = useContext(UserContext)
  console.log("component5.jsx is rendered ...");
  return <div style={{ marginTop: "10px" }}>I'm componet number 5</div>;
}

export default component5;
