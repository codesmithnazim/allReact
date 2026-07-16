// import React, { Profiler } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import Component3 from "./components/component3";
// Focus on it, It has a lot of information about, context subscription, React’s reconciliation(I mean do not re-render the childrens prop until it changes by refernce or by value, and preventing un-wanted re-renders through the use of memo)

function App() {
  return (
    <UserContextProvider>
      <SignIn />
      <Profile />
      <Component3 />
    </UserContextProvider>
  );
}

export default App;
