import  { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const handleSubmit=()=>{
        setUser({name, password})
  }
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default SignIn;
