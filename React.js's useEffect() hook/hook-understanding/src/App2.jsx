import React, { useEffect, useState } from "react";

function App2() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("I will render, whenever the count's value changes");

    return () => {
      console.log("I'll run when cleaning the previous useEffect");
    };
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setcount(count+1);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App2;
