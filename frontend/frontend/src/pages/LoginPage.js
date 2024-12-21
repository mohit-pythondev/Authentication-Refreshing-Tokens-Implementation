import React from "react";

const  LoginPage = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder="Enter Username" name="username" />
            <input type="password" placeholder="Enter Password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginPage;
