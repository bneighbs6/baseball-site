import './App.css';
import Header from './Components/Header';
import MeetTheCoach from './Components/MeetTheCoach';
import NavigationBar from './Components/NavigationBar';
import Calendly from './Components/CalendlyForm';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

function App() {
  return (
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
  );
}

export default App;
