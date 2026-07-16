import { memo } from "react";

function component1() {
  console.log("component1.jsx is rendered ...");

  return <div style={{"marginTop":"10px"}}>I'm componet number 1</div>;
}

export default memo(component1);
