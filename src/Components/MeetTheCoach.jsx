import React from "react";
import { Card } from "react-bootstrap";
import CarouselOfImages from "./CarouselOfImages";

function MeetTheCoach() {
    return (
        <div className="uniform-container">
            <Card className="uniform-card">
                <CarouselOfImages />
                <Card.Title className="uniform-title">Meet Coach Brett Neighbors</Card.Title>
                <Card.Body className="uniform-body">
                    <p>Welcome! Growing up in Las Vegas, I developed a passion for sports, playing both baseball and football in high school. My dedication led me to earn 1st-Team All Southern Nevada as a Utility Player before continuing my journey at Spokane Falls Community College.</p>
                    <p>For the past seven years, I’ve been a Certified Strength & Conditioning Specialist, focusing on training youth athletes from ages 8 to collegiate level in baseball skill development. I believe every athlete has the potential to excel, and I’m here to provide the guidance and support needed to help you achieve your goals. Let’s work together to elevate your game!</p>
                </Card.Body>
                <Card.Body className="service-area">Serving the Flathead Valley</Card.Body>
            </Card>
        </div>
    );
}

export default MeetTheCoach;