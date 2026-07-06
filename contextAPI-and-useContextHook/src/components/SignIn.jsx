import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function signin() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const users= useContext(UserContext)


  const submitHandler = () => {
    console.log("ctrl in SH");
    // console.log("before adding user", users);
    users.setUser({name, password })
    console.log("After adding user", users.user);
  };


  return (
    <>
      <input
        type="text"
        placeholder="Enter your name "
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter strong password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="cursor"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault;
          submitHandler();
        }}
      >
        Submit
      </button>
    </>
  );
}

export default signin;
