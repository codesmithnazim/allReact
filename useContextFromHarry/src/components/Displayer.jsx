// // import React from "react";
// import Button from "../components/IncrementingButton";
// import Screen from "../components/Screen";

// function Displayer({value}) {
//     let [count , setCount]= value
//   return (
//     <div className="p-2 bg-blue-300 border-2 border-black flex flex-col gap-1 w-40 mx-auto rounded-xl mt-4 text-zinc-800">
//       <Screen count={count}></Screen>
//       <Button value={[count, setCount]}></Button>
//     </div>
//   );
// }

// export default Displayer;

// import React from "react";
import { useContext } from "react";
import Button from "./IncrementingButton";
import Screen from "./Screen";
import CountContext from "../contexts/CountContext";

function Displayer() {
  // let [count , setCount]= value It's used wothout the context
  const values = useContext(CountContext);
  console.log("What we get from the context", values);
  return (
    <div className="p-2 bg-blue-300 border-2 border-black flex flex-col gap-1 w-40 mx-auto rounded-xl mt-4 text-zinc-800">
      <Screen></Screen>
      <Button></Button>
    </div>
  );
}

export default Displayer;
