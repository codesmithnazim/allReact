// import React from "react";
// import UserContext from "../context/userContext";

function profile({ value }) {
  return value.user ? <div>welcome {value.user.name}</div> : <div>Login First</div>;
}

export default profile;
