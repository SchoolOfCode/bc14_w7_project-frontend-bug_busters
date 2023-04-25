import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import './calendar.css'
import Modal from "../Modal/Modal"


function Calendar({data}) {
  const [modalToggle, setModalToggle] = useState(false);
  
  return (
    <>
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        slotMinTime={"07:00:00"}
        slotMaxTime={"18:00:00"}
        dayHeaderContent={function(arg) {
            return null;
        }}
        dayHeaderDidMount={function(arg) {
            const dateString = arg.date;
            const dateObj = new Date(dateString);
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = daysOfWeek[dateObj.getDay()];
            const date = dateObj.getDate();
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();
            const formattedDate = `${dayOfWeek} ${date.toString()} / ${month.toString()}`;

            let button = document.createElement("button");
            button.classList.add("day-header-button");
            button.innerText=`${formattedDate} - Resources`;
            arg.el.appendChild(button);

            button.addEventListener("click", () => {
              setModalToggle(true);
            })
        }}
      />
      {modalToggle && <Modal data={data} setModalToggle={setModalToggle}/>}
    </>
  );
}

export default Calendar;