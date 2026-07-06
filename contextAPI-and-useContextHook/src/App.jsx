import UserContextProvider from "./context/UserContextProvider";
import SignIn from "./components/signin";
import Profile from "./components/Profile"

function App() {
  return (
    <UserContextProvider>
      <SignIn></SignIn>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
