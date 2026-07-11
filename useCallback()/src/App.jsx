import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  // const setAdjective = () => {
  //   return "Good";
  // };
  let  setAdjective = useCallback(() => {
    return "good " +count;
  }, [count]);

  return (
    <div>
      <Navbar adjective={setAdjective} />
      <button
        className="p-2 cursor-pointer"
        onClick={() => {
          setCount((e) => e + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
}

export default App;
