// import React from "react";
import Users from "./assets/components/users";
import Trustedusers from "./assets/components/trustedUsers";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <div className="bg-red-500  text-white pl-4 py-4">
        I am the app.jsx data and the count
        <span
          className="text-zinc-800 underline cursor-pointer"
          onClick={() => setCount((e) => e + 1)}
        >
          {count}
        </span>
      </div> */}
      <Trustedusers>
        <Users />
      </Trustedusers>
    </>
  );
}

export default App;
