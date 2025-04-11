import React from "react";
import logoImage from "../media/Transparent.png"
import fielding1 from "../media/fielding1.jpg"
import fielding2 from "../media/fielding2.jpg";
import fielding3 from "../media/fieliding3.jpg";
import leftySwing1 from "../media/leftySwing1.jpg";
import rightySwing1 from "../media/rightySwing1.jpg";
import ballOnTee from "../media/ballOnTee.jpg";
import standingWithBat from "../media/standingWithBat.jpg";
import tee1 from "../media/tee1.jpg";
import tee2 from "../media/tee2.jpg";
import { Carousel } from "react-bootstrap";

function Header() { 
    return (
      <header className="header-logo-container text-center">
        <img className="logo" src={logoImage} alt="Neighborly Nine Logo" />
        <Carousel>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={fielding1} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={fielding2} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={fielding3} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={leftySwing1} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={rightySwing1} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={tee1} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={tee2} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={standingWithBat} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={ballOnTee} alt="coach instructing baseball drill" />
          </Carousel.Item>
        </Carousel>
      </header>
    );
}

export default Header; 