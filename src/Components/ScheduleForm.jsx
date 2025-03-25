import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Card } from "react-bootstrap";

function ScheduleForm() {

  const initialFormState = {
    parent_name: "",
    athlete_name: "",
    parent_email: "",
    lesson_duration: "",
    request: "",
  };

  const [form, setForm] = useState({ ...initialFormState });
  const [lessonDuration, setLessonDuration] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    // Check if lesson duration is selected
    if (!lessonDuration) {
      alert("Please select a lesson duration.");
      return;
    }

    // Send form data to Formspree
    const response = await fetch("https://formspree.io/f/xovelaak", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert(
        "Your form has been submitted. You will receive an email responding to your request within 24 hours."
      );
      setForm({ ...initialFormState }); // Reset the form
      setLessonDuration(""); // Reset the lesson duration
    } else {
      alert("There was a problem with your submission. Please try again.");
    }
  }

  function handleParentNameChange(e) {
    setForm({ ...form, parent_name: e.target.value });
  }

  function handleAthleteNameChange(e) {
    setForm({ ...form, athlete_name: e.target.value });
  }

  function handleParentEmailChange(e) {
    setForm({ ...form, parent_email: e.target.value });
  }

  function handleLessonDurationChange(eventKey) {
    setLessonDuration(eventKey); // Update the lesson duration state
    setForm({ ...form, lesson_duration: eventKey }); // Update the form state
  }

  function handleRequestChange(e) {
    setForm({ ...form, request: e.target.value });
  }

  return (
    <div className="schedule-form mx-5">
      <Card>
        <h1 className="my-2">Schedule a Lesson</h1>
        <h4>
          Please fill out the form below. You will receive a response from a
          coach within 24 hours.
        </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mx-3">
            <Form.Label>Parent Name</Form.Label>
            <Form.Control
              name="parent_name" // Changed to match the state key
              type="text"
              required
              value={form.parent_name}
              onChange={handleParentNameChange}
              placeholder="Enter Parent's Name"
            />
          </Form.Group>
          <Form.Group className="mx-3">
            <Form.Label className="my-1">Athlete's Name</Form.Label>
            <Form.Control
              name="athlete_name" // Changed to match the state key
              type="text"
              required
              value={form.athlete_name}
              onChange={handleAthleteNameChange}
              placeholder="Enter your street address"
            />
          </Form.Group>
          <Form.Group className="mx-3">
            <Form.Label className="my-1">Parent's Email Address</Form.Label>
            <Form.Control
              name="parent_email" // Changed to match the state key
              type="email"
              required
              value={form.parent_email}
              onChange={handleParentEmailChange}
              placeholder="Enter Parent's Email"
            />
          </Form.Group>

          <Form.Group className="my-1">
            <Form.Label>Lesson Duration</Form.Label>
            <Dropdown onSelect={handleLessonDurationChange}>
              <Dropdown.Toggle
                variant="primary"
                required
                style={{
                  backgroundColor: "#003f85",
                  border: "none",
                  color: "white",
                }}
              >
                {lessonDuration || "Choose how long you want to train"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  *Choose how long you want to train
                </Dropdown.Item>
                <Dropdown.Item eventKey={"30 Min"}>30 Min</Dropdown.Item>
                <Dropdown.Item eventKey={"60 Min"}>60 Min</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>
              Tell us what you are looking for your athlete.
            </Form.Label>
            <Form.Control
              name="request"
              as="textarea"
              required
              rows={2}
              value={form.request}
              onChange={handleRequestChange}
              placeholder="e.g. 'I am looking for hitting lessons twice a week for four weeks for my son.'"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button
            className="my-3"
              variant="primary"
              style={{
                backgroundColor: "#003f85",
                border: "none",
                color: "white",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default ScheduleForm;