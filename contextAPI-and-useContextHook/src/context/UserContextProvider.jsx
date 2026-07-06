import React, { useState } from "react";
import UserContext from "./userContext";
import { useContext } from "react";

function UserContextProvider({children}) {
  const [user, setUser] = useState(null)
  const context= useContext(UserContext)
  return (
    <context.provider value={{user, setUser}}>
      {children}
    </context.provider>
  )
}

export default UserContextProvider;
