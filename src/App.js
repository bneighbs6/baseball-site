import './App.css';
import Header from './Components/Header';
import MeetTheCoach from './Components/MeetTheCoach';
import NavigationBar from './Components/NavigationBar';
import ScheduleForm from './Components/ScheduleForm';

function App() {
  return (
    <div className="App">
      <div className="header my-3">
        <Header />
      </div>
      <div className="navbar mx-auto">
        <NavigationBar />
      </div>
      <div className="meetTheCoach">
        <MeetTheCoach />
      </div>
      <div id="schedule">
        <ScheduleForm />
      </div>
    </div>
  );
}

export default App;
