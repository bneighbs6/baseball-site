import React from "react";
import { Card } from "react-bootstrap";

function HomePage() {
    return (
        <div className="uniform-container">
            <h2 className="uniform-title">Welcome to Diamond Development!</h2>
            <div className="home-page-body">
                <p>
                    We're thrilled to have you here! At Diamond Development, we believe
                    that every player has the potential to shine on the field. Whether
                    you're just starting out or looking to refine your skills, our
                    individual and group lessons are designed to help you elevate your
                    game to the next level.
                </p>
                <p>
                    As a dedicated baseball coach, I’m passionate about sharing my
                    knowledge and experience with players of all ages and skill levels.
                    From hitting and pitching to fielding and base running, we cover all
                    aspects of the game in a fun and supportive environment.
                </p>
                <p>
                    Explore our programs, meet fellow baseball enthusiasts, and let’s
                    work together to achieve your baseball goals. Thank you for choosing
                    Diamond Development—where your journey to becoming a better player
                    begins!
                </p>
                <p>Play ball! ⚾️</p>
            </div>
            <div className="home-page-card-container">
                <Card className="uniform-card">
                    <Card.Title>The New Baseball Strength Program</Card.Title>
                    <Card.Body>
                        Be stronger in the box, throw harder in the field or on the mound,
                        and be better than everyone else with the Baseball Strength
                        Program. This program is designed to develop the necessary
                        strength needed to excel in the game of baseball. Choose your
                        level of experience in the weight room and we will deliver the
                        best training program available.
                    </Card.Body>
                    <Card.Body>
                        Stay tuned for the Baseball Strength Program Launch Date
                    </Card.Body>
                    <button disabled className="home-page-btn">
                        Click Here to Get Strong
                    </button>
                </Card>
            </div>
        </div>
    );
}

export default HomePage;