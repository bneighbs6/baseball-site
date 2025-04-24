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
              Please select the number of athletes that will be training. Once
              you've made your selection, click on the duration of the lesson
              you would like to schedule.
            </Card.Text>
            <Row className="mb-3">
              <Col>
                <h3>Pricing</h3>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>One Athlete</Accordion.Header>
                    <Accordion.Body>
                      <button
                        onClick={handle30MinClick}
                        className="uniform-btn-lesson"
                      >
                        30 Minute Lesson = $60
                      </button>
                    </Accordion.Body>
                    <Accordion.Body>
                      {" "}
                      <button
                        onClick={handle60MinClick}
                        className="uniform-btn-lesson"
                      >
                        60 Minute Lesson = $100
                      </button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Two Athletes</Accordion.Header>
                    <Accordion.Body>
                      {" "}
                      <button
                        onClick={handle30MinClick}
                        className="uniform-btn-lesson"
                      >
                        30 Minute Lesson = $100
                      </button>
                    </Accordion.Body>
                    <Accordion.Body>
                      {" "}
                      <button
                        onClick={handle60MinClick}
                        className="uniform-btn-lesson"
                      >
                        60 Minute Lesson = $160
                      </button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Three Athletes</Accordion.Header>
                    <Accordion.Body>
                      {" "}
                      <button
                        onClick={handle30MinClick}
                        className="uniform-btn-lesson"
                      >
                        30 Minute Lesson = $120
                      </button>
                    </Accordion.Body>
                    <Accordion.Body>
                      {" "}
                      <button
                        onClick={handle60MinClick}
                        className="uniform-btn-lesson"
                      >
                        60 Minute Lesson = $180
                      </button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              {/* <Col
                xs={12}
                md={6}
                className="d-flex flex-column align-items-center"
              >
                <button
                  onClick={handle30MinClick}
                  className="uniform-btn-lesson"
                >
                  30 Minute Lesson
                </button>
                <button
                  onClick={handle60MinClick}
                  className="uniform-btn-lesson"
                >
                  60 Minute Lesson
                </button>
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Scheduler;