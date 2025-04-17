import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import ShopPage from "./Components/Pages/ShopPage";
import Layout from "./Layout/layout";
import MeetTheCoach from "./Components/MeetTheCoach";
import ContactForm from "./Components/ContactForm";
import CalendlyForm from "./Components/CalendlyForm";
import Footer from "./Components/Footer";

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
        <div className="router-container">
          <Routes>
            {/* <Route path="/" element={<Layout />} /> */}
            <Route path="/meet" element={<MeetTheCoach />} />
            <Route path="/schedule" element={<CalendlyForm />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
