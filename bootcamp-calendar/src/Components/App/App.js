import { useState } from 'react';

import Calendar  from '../Calendar/Calendar';
import './App.css';
import data from "../../data/data"
import HeaderLogo from "../HeaderLogo/HeaderLogo"
import Footer from "../Footer/Footer"
import WeeklyTopicBar from '../WeeklyTopicBar/WeeklyTopicBar';

function App() {

  const [dateStart, setDateStart] = useState();

  return (
    <div className="App">
      <HeaderLogo />
      <WeeklyTopicBar data={data} dateStart={dateStart}/>
      <Calendar data={data} setDateStart={setDateStart}/>
      <Footer />
    </div>
  );
}

export default App;
