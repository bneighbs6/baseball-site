import React from "react";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import MeetTheCoach from "../Components/MeetTheCoach";
import CalendlyForm from "../Components/CalendlyForm"
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";


function Layout() {
    return (
        <div className="App">
        <div id="meetTheCoach">
          <MeetTheCoach />
        </div>
        <div id="calendly">
          <CalendlyForm />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
}

export default Layout; 