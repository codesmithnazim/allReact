// // import React from 'react'

import { useContext } from "react";
import CountContext from "../contexts/CountContext";

// function IncrementingButton(props) {
//   let [count, setCount] = props.value;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

// export default IncrementingButton;

// import React from 'react'

function IncrementingButton() {
  
  // let [count, setCount] = props.value;
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default IncrementingButton;
