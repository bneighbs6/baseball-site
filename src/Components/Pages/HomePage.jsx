import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Widget from "../Widget";

function HomePage() {
  // Tracks if user is on a mobile device
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    // Sets the buttonPopup trigger === false
    const [buttonPopup, setButtonPopup] = useState(false);
    // Sets the timedPopup trigger === false
    const [timedPopup, setTimedPopup] = useState(false);

    // Displays a popup widget after 3 seconds
    useEffect(() => {
      setTimeout(() => {
        setTimedPopup(true);
      }, 3000);
    }, []);

    return (
      <div className="uniform-container">
        <h2 className="uniform-title">Welcome to Diamond Development!</h2>
        <div className="home-page-body">
          {/* If isMobile === true, display Mobile Content, otherwise display Desktop Content */}
          {isMobile ? (
            // Mobile content
            <>
              {/* When clicked, buttonPopup will be set to TRUE */}
              <button className="open" onClick={() => setButtonPopup(true)}>
                Open Popup
              </button>
              {/* you can access these props in Widget component using "props.trigger" or "props.setTrigger" */}
              <Widget trigger={buttonPopup} setTrigger={setButtonPopup}>
                My normal popup
              </Widget>
              {/* you can access these props in Widget component using "props.trigger" or "props.setTrigger" */}
              <Widget trigger={timedPopup} setTrigger={setTimedPopup}>
                MY TIMED POPUP
              </Widget>
              <p>Click on the menu to get started.</p>
              <p>
                We're excited to help you improve your baseball skills. Our
                individual and group lessons are tailored to fit your needs,
                whether you're a beginner or looking to refine your skills. Join
                us to improve your overall performance on the field.
              </p>
            </>
          ) : (
            // This content is displayed if user is on a desktop
            // Desktop content
            <>
              {/* When clicked, buttonPopup will be set to TRUE */}
              <button className="open" onClick={() => setButtonPopup(true)}>
                Open Popup
              </button>
              {/* you can access these props in Widget component using "props.trigger" or "props.setTrigger" */}
              <Widget trigger={buttonPopup} setTrigger={setButtonPopup}>
                My normal popup
              </Widget>
              {/* you can access these props in Widget component using "props.trigger" or "props.setTrigger" */}
              <Widget trigger={timedPopup} setTrigger={setTimedPopup}>
                MY TIMED POPUP
              </Widget>
              <p>
                We're thrilled to have you here! At Diamond Development, we
                believe that every player has the potential to shine on the
                field. Whether you're just starting out or looking to refine
                your skills, our individual and group lessons are designed to
                help you elevate your game to the next level.
              </p>
              <p>
                As a dedicated baseball coach, I’m passionate about sharing my
                knowledge and experience with players of all ages and skill
                levels. From hitting and pitching to fielding and base running,
                we cover all aspects of the game in a fun and supportive
                environment.
              </p>
              <p>
                Explore our programs, meet fellow baseball enthusiasts, and
                let’s work together to achieve your baseball goals. Thank you
                for choosing Diamond Development—where your journey to becoming
                a better player begins!
              </p>
              <p>Play ball! ⚾️</p>
            </>
          )}
        </div>
        {!isMobile && ( // Only show this part if not on mobile
          <div className="uniform-container">
            <Card className="uniform-card">
              <Card.Title className="uniform-title">
                The New Baseball Strength Program
              </Card.Title>
              <Card.Body>
                Be stronger in the box, throw harder in the field or on the
                mound, and be better than everyone else with the Baseball
                Strength Program. This program is designed to develop the
                necessary strength needed to excel in the game of baseball.
                Choose your level of experience in the weight room and we will
                deliver the best training program available.
              </Card.Body>
              <Card.Body>
                Stay tuned for the Baseball Strength Program Launch Date
              </Card.Body>
              <button disabled className="uniform-btn-home-card">
                Click Here to Get Strong
              </button>
            </Card>
          </div>
        )}
      </div>
    );
}

export default HomePage;
