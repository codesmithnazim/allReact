import { useMemo, useState } from "react";
import UserContext from "./UserContext";
// import { useContext } from "react";

import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component4 from "../components/component4";
import Component5 from "../components/component5";

function UserContextProvider({ children }) {
  const [user, setUser] = useState("");

  const secondandThridcomponents = useMemo(() => {
    return (
      <>
        <Component4 />
        <Component5 />
      </>
    );
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      <Component1 />
      {/*Here direct component inside a context will be re-rendered inspite of cheking whther it's subscribing to that global context or not, here we can use memo on component side to get  rid of unwanted(unnecessary) re-renders */}
      <Component2>{secondandThridcomponents}</Component2>
    </UserContext.Provider>
  );
}

export default UserContextProvider;
