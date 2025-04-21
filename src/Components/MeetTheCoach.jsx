import React from "react";
import { Card } from "react-bootstrap";
import CarouselOfImages from "./CarouselOfImages";

function MeetTheCoach() {
    return (
      <div className="meet-the-coach-container">
        <Card xs="9" className="meet-the-coach-card">
          <CarouselOfImages />
          <Card.Title>Meet Coach Brett Neighbors</Card.Title>
          <Card.Body>
            Welcome! Growing up in Las Vegas, I developed a passion for
            sports, playing both baseball and football in high school. My
            dedication led me to earn 1st-Team All Southern Nevada as a Utility
            Player before continuing my journey at Spokane Falls Community
            College.
          </Card.Body>
          <Card.Body>
            For the past seven years, I’ve been a Certified Strength &
            Conditioning Specialist, focusing on training youth athletes from
            ages 8 to collegiate level in baseball skill development. I believe
            every athlete has the potential to excel, and I’m here to provide
            the guidance and support needed to help you achieve your goals.
            Let’s work together to elevate your game!
          </Card.Body>
          <Card.Body className="service-area">Serving the Flathead Valley</Card.Body>
        </Card>
      </div>
    );
}

export default MeetTheCoach;