// import React, { Profiler } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import SignIn from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Profile></Profile>
      <SignIn></SignIn>
    </UserContextProvider>
  );
}

export default App;
