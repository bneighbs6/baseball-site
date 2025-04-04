import './App.css';
import Header from './Components/Header';
import MeetTheCoach from './Components/MeetTheCoach';
import NavigationBar from './Components/NavigationBar';
import ContactForm from './Components/ScheduleForm';

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
      <div id="schedule">
        {/* Scheudle Form Goes Here */}
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
