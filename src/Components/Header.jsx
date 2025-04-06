import React from "react";
import logo from "./logo.jpeg"

function Header() { 
    return (
      <header className="logo-container text-center">
        <img className="logo" src={logo} alt="Neighborly Nine Logo" />
      </header>
    );
}

export default Header; 