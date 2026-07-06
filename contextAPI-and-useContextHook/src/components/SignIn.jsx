import React, { useState } from "react";

function signin({value}) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  value.setUser={name:name,password:password}
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name "
        onchange={(e) => {
          setName(e.taget.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter strong password"
        onchange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </>
  );
}

export default signin;
