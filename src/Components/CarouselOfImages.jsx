import React from "react";
import logoImage from "../media/DiamondDevTransparent.png";
import fielding1 from "../media/fielding1.jpg";
import fielding2 from "../media/fielding2.jpg";
import fielding3 from "../media/fieliding3.jpg";
import leftySwing1 from "../media/leftySwing1.jpg";
import rightySwing1 from "../media/rightySwing1.jpg";
import ballOnTee from "../media/ballOnTee.jpg";
import standingWithBat from "../media/standingWithBat.jpg";
import tee1 from "../media/tee1.jpg";
import tee2 from "../media/tee2.jpg";
import { Carousel } from "react-bootstrap";

function CarouselOfImages() {
    return (
      <div className="carousel">
        <Carousel className="carousel-background">
          {/* <Carousel.Item className="carousel-item" interval={2500}>
          <img 
          src={fielding1} 
          alt="coach instructing baseball drill"
          style={{ objectPosition: "50% 35.5%", width: "100%", height: "100%", objectFit: "cover" }} />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={2500}>
          <img 
          src={fielding2} 
          alt="coach instructing baseball drill"
          style={{ objectPosition: "50% 35.5%", width: "100%", height: "100%", objectFit: "cover" }} />
        </Carousel.Item> */}
          <Carousel.Item className="carousel-item" interval={2500}>
            <img
              src={fielding3}
              alt="coach instructing baseball drill"
              style={{
                objectPosition: "50% 35.5%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
          {/* <Carousel.Item className="carousel-item" interval={2500}>
          <img src={leftySwing1} alt="coach instructing baseball drill" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={2500}>
          <img src={rightySwing1} alt="coach instructing baseball drill" />
        </Carousel.Item> */}
          <Carousel.Item className="carousel-item" interval={2500}>
            <img
              src={tee1}
              alt="coach instructing baseball drill"
              style={{
                objectPosition: "50% 28%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
          {/* <Carousel.Item className="carousel-item" interval={2500}>
          <img src={tee2} alt="coach instructing baseball drill" />
        </Carousel.Item> */}
          <Carousel.Item className="carousel-item" interval={2500}>
            <img src={standingWithBat} alt="coach instructing baseball drill" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={2500}>
            <img src={ballOnTee} alt="coach instructing baseball drill" />
          </Carousel.Item>
        </Carousel>
        <img className="carousel-logo" src={logoImage} alt="Neighborly Nine Logo" />
      </div>
    );
}

export default CarouselOfImages;