import { useState, useRef, useEffect } from "react";
// import { createRoot } from "react-dom/client";

import { createRoot } from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  // const [count, setcount] = useState(0);
  const count = useRef({value:0, worlking:true});

  useEffect(() => {
    count.current.value = count.current.value + 1;
    // setcount((e) => e + 1);
  },[inputValue]);


  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current.value}</h1>
      {console.log("The count object contains , ", count)}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);



// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [previousInputValue, setPreviousInputValue] = useState("");

//   useEffect(() => {
//     setPreviousInputValue(inputValue); // "just use state instead of ref"
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById("root")).render(<App />);