import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Updated import statement

const Header = () => {
    // Destructure the 'name' from the AuthContext
    const { user , au} = useContext(AuthContext);

    return (
        <div>
            <Link to="/">Home</Link>
            <span> | </span>    
            {user ? (
                <p >Logout</p>   
            ):(
            <Link to="/login">Login</Link>

            )
        
        }
            {user && <span> <h1>Namste, {user.username}</h1> 
            </span>}
        </div>
    );
}

export default Header;
