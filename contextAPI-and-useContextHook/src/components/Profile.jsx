import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function profile() {
  //   const {user}= useContext(userContext)
  const { User } = useContext(UserContext);

  if (!User) return <div>Please Login</div>;
  if (User) return <div>Welcome {User.username}</div>;
}

export default profile;
