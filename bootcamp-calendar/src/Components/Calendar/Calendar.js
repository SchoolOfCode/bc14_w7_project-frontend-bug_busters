import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!

import './calendar.css'
import Modal from "../Modal/Modal"


function Calendar({ data, setDateStart }) {
    const [modalToggle, setModalToggle] = useState(false);

    const [filteredData, setFilteredData] = useState({});
    
    return (
    <>
        <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        // set start and end hours
        slotMinTime={"07:00:00"}
        slotMaxTime={"18:00:00"}
        initialEvents={data} // inserts pre-made events from the data.js file
        contentHeight={"auto"} // remove scroll bar - display as is on screen
        allDaySlot={false} // hide the all day slot cell

        datesSet={function(dateInfo) {
            setDateStart(dateInfo.start);
        }}

        // Insert button into Day Header cell with JSX and output British formatted date as button text
        dayHeaderContent={function(arg) {
          const dateObj = arg.date;
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Create an array of days of the week
          const dayOfWeek = daysOfWeek[dateObj.getDay()]; // Get the day of the week from the Date object and use it to look up the corresponding day name in the array
          const date = dateObj.getDate(); // Get the day of the month from the Date object
          const month = dateObj.getMonth() + 1; // Get the month from the Date object and add 1, since getMonth() returns a zero-based index (javascript... 🙄)
          const year = dateObj.getFullYear(); // Get the year from the Date object
          const formattedDate = `${dayOfWeek} ${date.toString()} / ${month.toString()}`;
          const dataDate = `${year}-${month.toString().padStart(2, "0")}-${date
            .toString()
            .padStart(2, "0")}`;

          function handleClick() {
            setModalToggle(true);
            const filterData = data.filter((item) => item.start.startsWith(dataDate));
            setFilteredData(filterData);
          }

          return <button onClick={handleClick} className='day-header-button'>{formattedDate}<br/>Resources</button>;
        }}
        />
        {/* display modal on click of resources button */}
        {modalToggle && <Modal filteredData={filteredData} setModalToggle={setModalToggle}/>}
    </>
    );
};

export default Calendar;