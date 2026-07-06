// import React, { Profiler } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";

function App() {
  return (
    <UserContextProvider>
      <SignIn />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
