import { useContext } from "react";
import UserContext from "../context/UserContext";


function profile(){
  const users= useContext(UserContext)
  console.log("from the profile page", users)
  return users.user.name ? <div>welcome {users.user.name}</div> : <div>Login First</div>;
}

export default profile;
