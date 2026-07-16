import {  memo, useState } from "react";
import { Theme } from "../context/theme";

function component2({ children }) {
  const [isDark, setIsDark] = useState(false);
  console.log("component2.jsx is rendered ...");

  return (
    <Theme.Provider value={{ isDark, setIsDark }}>
      <div style={{ marginTop: "10px" }}>I'm componet number 2</div>
      {children}
    </Theme.Provider>
  );
}

export default (component2)
