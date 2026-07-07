import { createContext, useContext, useState } from "react";

const Themecontext= createContext()

function ThemeContextProvider({children}) {
  const [bgcolor, setBgcolor] = useState("black")

  return (
   <Themecontext.Provider value={{bgcolor,setBgcolor}}>
    {children}
   </Themecontext.Provider>
  )
}

//  const UseTheme=()=>{ We can make a searate file for it if contexts increases
//   const themeController=useContext(Themecontext)
//   console.log("from context provider ", themeController)
//   return themeController
// }

// export {UseTheme}
export {Themecontext}
export default ThemeContextProvider
