import React from "react";
import logoImage from "../media/Transparent.png"

function Header() { 
    return (
      <header className="logo-container text-center">
        <img className="logo" src={logoImage} alt="Neighborly Nine Logo" />
      </header>
    );
}

export default Header; 