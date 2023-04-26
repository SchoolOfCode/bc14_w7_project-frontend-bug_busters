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
        // set start and end hours
        slotMinTime={"07:00:00"}
        slotMaxTime={"18:00:00"}
        initialEvents={data} // inserts pre-made events from the data.js file

        // uncomment this to allow formatting of calendar data
        // eventContent={renderEventContent}

        // remove default content from day header (American formatted date) + hide parent container in css file with class .fc-scrollgrid-sync-inner
        dayHeaderContent={function(arg) {
            return null;
        }}

        // Reformat date to British and insert as content to a newly inserted button in the day header sections
        dayHeaderDidMount={function(arg) {
            const dateString = arg.date; // Get the date string from the argument
            const dateObj = new Date(dateString); // Create a new Date object from the date string
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Create an array of days of the week
            const dayOfWeek = daysOfWeek[dateObj.getDay()]; // Get the day of the week from the Date object and use it to look up the corresponding day name in the array
            const date = dateObj.getDate(); // Get the day of the month from the Date object
            const month = dateObj.getMonth() + 1; // Get the month from the Date object and add 1, since getMonth() returns a zero-based index (javascript... 🙄)
            const year = dateObj.getFullYear(); // Get the year from the Date object

            // Create a formatted date string using the day of the week, day of the month, and month
            const formattedDate = `${dayOfWeek} ${date.toString()} / ${month.toString()}`;
            // create date format for attaching to button
            const dataDate = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, ' ')}`;

            // create button element
            let button = document.createElement("button");
            // add a class to the button
            button.classList.add("day-header-button");

            // add British formatted date to inner text of button
            button.innerText=`${formattedDate}\nResources`;
            // use arg.el (as suggested in the FullCalendar docs: https://fullcalendar.io/docs/day-header-render-hooks to append button to the day header)
            arg.el.appendChild(button);

            // add on click event listener to button
            button.addEventListener("click", () => {
                // on button click toggle modal useState to true
                setModalToggle(true);

                // use filter() to search data object for objects where the start property contains the dataDate string
                const filterData = data.filter(item => item.start.startsWith(dataDate));

                setFilteredData(filterData);
            })
        }}
        />
        {/* display modal on click of resources button */}
        {modalToggle && <Modal filteredData={filteredData} setModalToggle={setModalToggle}/>}
    </>
    );
}

export default Calendar;