import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function Calendly() {
    return (
      <div className="calendly mx-5">
        <Card xs="9">
          <Card.Body>
            <Card.Title>
              <div className="lesson-header">
                <h3>Schedule a Lesson</h3>
              </div>
            </Card.Title>
            <Card.Text>
              Click on the duration you want your lesson to be and you will be
              redirected to my calendar to set up a time for your lesson.
            </Card.Text>
            <Card.Body>
              <button className="lesson-btn">30 Minute Lesson</button>
              <button className="lesson-btn">60 Minute Lesson</button>
            </Card.Body>
          </Card.Body>
          <h3 className="pricing-header">Pricing</h3>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h4>One Athlete</h4>
            </ListGroup.Item>
            <ListGroup.Item>30 Min Lesson = $60</ListGroup.Item>
            <ListGroup.Item>60 Min Lesson = $100</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h4>Two Athletes</h4>
            </ListGroup.Item>
            <ListGroup.Item>30 Min Lesson = $100</ListGroup.Item>
            <ListGroup.Item>60 Min Lesson = $160</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h4>Three Athletes</h4>
            </ListGroup.Item>
            <ListGroup.Item>30 Min Lesson = $120</ListGroup.Item>
            <ListGroup.Item>60 Min Lesson = $180</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
}

export default Calendly; 