import React, { useState, useEffect } from "react";
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
  const [price, setPrice] = useState(0);

  useEffect(() => {
    console.log(price); // Stores the price in useEffect due to useState's async property
  }, [price]); // Effects each time price changes

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    // Check if lesson duration is selected
    // if (!lessonDuration) {
    //   alert("Please select a lesson duration.");
    //   return;
    // }

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
      setPrice(0); // Reset the price
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

  function handleLessonDurationChange(e) {
    const selectedDuration = e.target.value;
    setForm({ ...form, lesson_duration: selectedDuration });

    // Update the price based on the selected duration
    if(selectedDuration === "30 Min") {
      setPrice(60);
      console.log(price);
    } else if (selectedDuration === "60 Min") {
      setPrice(100);
      console.log(price);
    } else {
      setPrice(0);
      console.log(price);
    }
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
              placeholder="Enter Your Athlete's Name"
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
            {/* <Dropdown onSelect={handleLessonDurationChange}>
              <Dropdown.Toggle
                variant="primary"
                required
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "#00e6e6",
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
            </Dropdown> */}
            <Form.Select
              onChange={handleLessonDurationChange}
              value={form.lesson_duration}
            >
              <option value="">*Choose How Long You Want To Train</option>
              <option value="30 Min">30 Min</option>
              <option value="60 Min">60 Min</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Label>Tell us what you want for your athlete</Form.Label>
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
          <div className="m-3">
            <h5>Total Price: ${price}</h5>
          </div>
          <Form.Group>
            <Button className="submit-btn my-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default ScheduleForm;
