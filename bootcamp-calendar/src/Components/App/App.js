import Calendar  from '../Calendar/Calendar';
import './App.css';
import data from "../../data/data"
import HeaderLogo from "../HeaderLogo/HeaderLogo"
import Footer from "../Footer/Footer"
import WeeklyTopicBar from '../WeeklyTopicBar/WeeklyTopicBar';

function App() {
  return (
    <div className="App">
      <HeaderLogo />
      <WeeklyTopicBar data={data}/>
      <Calendar data={data} />
      <Footer />
    </div>
  );
}

export default App;
