import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";

function ContactForm() {
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
        console.log(price);
    }, [price]);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/xovelaak", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            alert("Your form has been submitted. You will receive an email responding to your request within 24 hours.");
            setForm({ ...initialFormState });
            setPrice(0);
        } else {
            alert("There was a problem with your submission. Please try again.");
        }
    }

    return (
        <div className="uniform-container">
            <Card className="uniform-card">
                <h2 className="uniform-title">Contact Us</h2>
                <h4>Please fill out the form below. You will receive a response from a coach within 24 hours.</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Parent Name</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={form.parent_name}
                            onChange={(e) => setForm({ ...form, parent_name: e.target.value })}
                            placeholder="Enter Parent's Name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Athlete's Name</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={form.athlete_name}
                            onChange={(e) => setForm({ ...form, athlete_name: e.target.value })}
                            placeholder="Enter Your Athlete's Name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Parent's Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            required
                            value={form.parent_email}
                            onChange={(e) => setForm({ ...form, parent_email: e.target.value })}
                            placeholder="Enter Parent's Email"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tell us what you want for your athlete</Form.Label>
                        <Form.Control
                            as="textarea"
                            required
                            rows={2}
                            value={form.request}
                            onChange={(e) => setForm({ ...form, request: e.target.value })}
                            placeholder="e.g. 'I am looking for hitting lessons twice a week for four weeks for my son.'"
                        />
                        <button className="submit-btn uniform-btn-contact-submit" variant="primary" type="submit">Submit</button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    );
}

export default ContactForm;
