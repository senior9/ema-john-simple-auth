import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user]=useAuthState(auth);
  const handleSIgnOut = ()=>{
    signOut(auth);
  }
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="nav-item">
        <nav>
          <a href="/shop">Shop</a>
          <a href="/order">Order-Review</a>
          <a href="/inventory">Manage Inventory</a>
         
          <a href="/signup">Signup</a>
        

          {
            user?
            <a href="/login"  onClick={handleSIgnOut}>Sign Out</a>
            : 
            <a href="/login">Login</a>
          }
        </nav>
      </div>
    </div>
  );
};

export default Header;
