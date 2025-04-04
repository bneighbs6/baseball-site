import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function Calendly() {
    return (
      <div className="calendly mx-5">
        <Card xs="9">
          <Card.Body>
            <Card.Title><h3>Schedule a Lesson</h3></Card.Title>
            <Card.Text>
              Click on the duration you want your lesson to be and you will be redirected to my calendar to set up a time for your lesson.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item><h4>Prices</h4></ListGroup.Item>
            <ListGroup.Item>30 Min Lesson = $60</ListGroup.Item>
            <ListGroup.Item>60 Min Lesson = $100</ListGroup.Item>
          </ListGroup>
          <Card.Body>
                <button className="lesson-btn">30 Minute Lesson</button><button className="lesson-btn">60 Minute Lesson</button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Calendly; 