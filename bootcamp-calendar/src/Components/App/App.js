import Calendar  from '../Calendar/Calendar';
import './App.css';
import data from "../../data/data"

function App() {
  return (
    <div className="App">
        <Calendar data={data} />
    </div>
  );
}

export default App;
