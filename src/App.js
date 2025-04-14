import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MeetTheCoach from './Components/MeetTheCoach';
import NavigationBar from './Components/NavigationBar';
import Calendly from './Components/CalendlyForm';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import ShopPage from "./Pages/ShopPage";

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
        <div id="meetTheCoach">
          <MeetTheCoach />
        </div>
        <div id="calendly">
          <Calendly />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
      <div className="router-container">
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
