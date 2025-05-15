// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import ShopPage from "./Components/Pages/ShopPage";
import Layout from "./Layout/layout";
import MeetTheCoach from "./Components/MeetTheCoach";
import ContactForm from "./Components/ContactForm";
import Scheduler from "./Components/Scheduler";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/HomePage";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe('pk_test_51ROPbZFgxce1MaOEDG6CCjV0QhQ5OOeK6sNwGumIB4ai4RE6x0A3uemfdQRxWX4hbpyGRstbzeTzT1e407zUdaSV00xLyNfzlE'); // replace with your Stripe PUBLISHABLE key

function App() {
  const [clientSecret, setClientSecret] = useState(""); // Create useState instance. Prop will be passed to ShopPage.jsx

  // Only runs once because of the empty dependency array
  // This useEffect is used to POST a new payment intent to my backend server storing my stripe payments
  useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", { // Send a POST request back to my backend server. This is where the server calls stripe.paymentIntents.create() and returns a client_secret
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2000, currency: "usd" }) // We want to create a payment intent of $20
    })
      .then((res) => res.json()) // After POSTing, respond to the user with json data
      .then((data) => setClientSecret(data.clientSecret)); // then set clientSecret === data. When this updates, the options object below becomes valid, and Stripe Elements can mount
  }, []);

  // Options object for Stripe Payments
  const options = {
    clientSecret, // The client secret returned from your server when creating a PaymentIntent
    appearance: {
      theme: "stripe", // Defines the visual theme for the Stripe Elements
    },
  };
  

  return (
    <Router>
      <div className="App">
        <div id="header">
          <Header />
        </div>
        <div id="navbar">
          <NavigationBar />
        </div>
        <div className="router-container mx-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meet" element={<MeetTheCoach />} />
            <Route path="/schedule" element={<Scheduler />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route
              path="/shop"
              element={
                clientSecret ? (
                  <Elements stripe={stripePromise} options={options}>
                    <ShopPage clientSecret={clientSecret} />
                  </Elements>
                ) : (
                  <p>Loading checkout...</p>
                )
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
