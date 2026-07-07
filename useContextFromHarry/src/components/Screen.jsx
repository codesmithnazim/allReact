// // import React from 'react'

import { useContext } from "react";
import CountContext from "../contexts/CountContext";

// function Screen({count}) {
//   return (
//     <div>
//       {count}
//     </div>
//   )
// }

// export default Screen

// import React from 'react'

function Screen() {
  let { count } = useContext(CountContext);
  return <div>{count}</div>;
}

export default Screen;
