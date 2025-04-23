import React from "react";
import { Card, Accordion, Row, Col } from "react-bootstrap";

function Scheduler() {
    function handle30MinClick() {
        window.open("https://appt.link/meet-with-brett-n-57yYGthM/30-min-lesson", "_blank");
    }

    function handle60MinClick() {
        window.open("https://appt.link/meet-with-brett-n-57yYGthM/60-min-lesson", "_blank");
    }

    return (
        <div className="uniform-container">
            <Card className="uniform-card">
                <Card.Body>
                    <Card.Title className="uniform-title">Schedule a Lesson</Card.Title>
                    <Card.Text>
                        Click on the duration you want your lesson to be and you will be redirected to my calendar to set up a time for your lesson.
                    </Card.Text>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <h3 className="uniform-title-pricing">Pricing</h3>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>One Athlete</Accordion.Header>
                                    <Accordion.Body>30 Min Lesson = $60</Accordion.Body>
                                    <Accordion.Body>60 Min Lesson = $100</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Two Athletes</Accordion.Header>
                                    <Accordion.Body>30 Min Lesson = $100</Accordion.Body>
                                    <Accordion.Body>60 Min Lesson = $160</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Three Athletes</Accordion.Header>
                                    <Accordion.Body>30 Min Lesson = $120</Accordion.Body>
                                    <Accordion.Body>60 Min Lesson = $180</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
                            <button onClick={handle30MinClick} className="uniform-btn-lesson">
                                30 Minute Lesson
                            </button>
                            <button onClick={handle60MinClick} className="uniform-btn-lesson">
                                60 Minute Lesson
                            </button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Scheduler;