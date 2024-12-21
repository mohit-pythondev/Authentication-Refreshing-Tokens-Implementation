import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct named import

// Export AuthContext as a named export
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authToken, setAuthToken] = useState(null);
  let [user, setUser] = useState(null);

  let loginuser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access)); // Updated usage
    } else {
      alert("Invalid Credentials");
    }
  };

  let contextData = {
    user: user,
    loginuser: loginuser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
