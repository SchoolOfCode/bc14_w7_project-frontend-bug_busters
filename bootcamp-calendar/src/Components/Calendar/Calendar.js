import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import './calendar.css'
import Modal from "../Modal/Modal"


function Calendar({data}) {
    const [modalToggle, setModalToggle] = useState(false);

    const [filteredData, setFilteredData] = useState({});

    // uncomment this to allow formatting of calendar data
    // function to render jsx into the calendar fields
    // function renderEventContent(eventInfo) {
    //     return (
    //     <>
    //         <b>{eventInfo.timeText}</b>
    //         <div><i>{eventInfo.event.title}</i></div>
    //     </>
    //     )
    // }
  
    return (
    <>
        <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        slotMinTime={"07:00:00"}
        slotMaxTime={"18:00:00"}
        // inserts pre-made events from the data.js file
        initialEvents={data}
        // uncomment this to allow formatting of calendar data
        // eventContent={renderEventContent}
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
            // create date format for attaching to button
            // const dataDate = `${date.toString().padStart(2, ' ')}-${month.toString().padStart(2, '0')}-${year}`;
            const dataDate = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, ' ')}`;

            // create button element
            let button = document.createElement("button");
            // add a class to the button
            button.classList.add("day-header-button");

            button.innerText=`${formattedDate} - Resources`;
            arg.el.appendChild(button);

            // add on click event listener to button
            button.addEventListener("click", () => {
                // on button click toggle modal useState to true
                setModalToggle(true);

                // use filter() to search data object for objects where the start property contains the buttons data-date attribute
                const filterData = data.filter(item => item.start.startsWith(dataDate));

                setFilteredData(filterData);
            })
        }}
        />
        {modalToggle && <Modal filteredData={filteredData} setModalToggle={setModalToggle}/>}
    </>
    );
}

export default Calendar;