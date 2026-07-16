import  { useContext, useState } from 'react'
import {themeContext} from "./theme"


function ThemeContextprovider({children}) {
    const [isDark, setIsDark] = useState(false)
    let Cprovider= themeContext.Provider
  return (
    <Cprovider value={{isDark, setIsDark}} >
      {children}
    </Cprovider>
  )
}

export default ThemeContextprovider

export function Usetheme() {
    return useContext(themeContext)
}