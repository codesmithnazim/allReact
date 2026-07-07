import  { useState } from "react";
import UserContext from "./UserContext";
// import { useContext } from "react";

function UserContextProvider({children}) {
  const [user, setUser] = useState('')
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;




