import { useContext } from "react"
import { Themecontext } from "./ThemeContextProvider"
// import Themecontext from "./ThemeContextProvider"

const UseTheme=()=>{ 
  const themeController=useContext(Themecontext)
  console.log("from context provider ", themeController)
  return themeController
}

export {UseTheme}