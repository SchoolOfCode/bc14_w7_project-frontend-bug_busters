import Calendar  from '../Calendar/Calendar';
import './App.css';
import data from "../../data/data"
import HeaderLogo from "../HeaderLogo/HeaderLogo"
import Footer from "../Footer/Footer"

function App() {
  return (
    <div className="App">
      <HeaderLogo />
      <Calendar data={data} />
      <Footer />
    </div>
  );
}

export default App;
