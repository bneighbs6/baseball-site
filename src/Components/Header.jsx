import React from "react";
import logo from "../Components/logo.jpeg";

function Header() { 
    return (
      <header className="logo-container text-center">
        <img className="logo" src={logo} />
      </header>
    );
}

export default Header; 