import React from "react";
import CarouselOfImages from "./CarouselOfImages";
import logoImage from "../media/DiamondDevTransparent2.png"

function Header() { 
    return (
      <header className="header-container">
        {/* <CarouselOfImages /> */}
        <img src={logoImage} className="header-logo" />
      </header>
    );
}

export default Header;