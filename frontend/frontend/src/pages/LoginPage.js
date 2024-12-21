import React,{useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const  LoginPage = () => {
  let {loginuser} = useContext(AuthContext);
  return (
    <div>
        <form onSubmit={loginuser} >
            <input type="text" placeholder="Enter Username" name="username" />
            <input type="password" placeholder="Enter Password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginPage;
