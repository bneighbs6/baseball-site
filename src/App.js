import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import ScheduleForm from './Components/ScheduleForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <div id="schedule">
        <ScheduleForm />
      </div>
    </div>
  );
}

export default App;
