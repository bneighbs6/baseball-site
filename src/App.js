// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import ShopPage from "./Components/Pages/ShopPage";
import MeetTheCoach from "./Components/MeetTheCoach";
import ContactForm from "./Components/ContactForm";
import Scheduler from "./Components/Scheduler";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/HomePage";
import ShopStrengthPage from "./Components/Pages/strength-page/ShopStrengthPage";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect, useState } from "react";

// const stripePromise = loadStripe('pk_test_51ROPbZFgxce1MaOEDG6CCjV0QhQ5OOeK6sNwGumIB4ai4RE6x0A3uemfdQRxWX4hbpyGRstbzeTzT1e407zUdaSV00xLyNfzlE'); // replace with your Stripe PUBLISHABLE key

function App() {
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
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/strength-programs" element={<ShopStrengthPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
