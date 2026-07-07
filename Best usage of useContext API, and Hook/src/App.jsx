import React, { createContext } from "react";
import Header from "./assets/components/Header";
import ThemeContextProvider from "./assets/contexts/ThemeContextProvider"

function App() {
  return (
      <ThemeContextProvider>
        <Header></Header>
      </ThemeContextProvider>
  
  );
}

export default App;
// export {Color}
