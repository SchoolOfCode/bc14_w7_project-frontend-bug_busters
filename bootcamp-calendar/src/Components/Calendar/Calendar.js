import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!

import './calendar.css'
import Modal from "../Modal/Modal"


function Calendar({data}) {
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
            // Create an array of month names
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
            const month = monthNames[dateObj.getMonth()]; // Get the month name from the Date object using the month number to look it up in the array

            const year = dateObj.getFullYear(); // Get the year from the Date object

            // Create a formatted date string using the day of the week, day of the month, and month name
            const formattedDate = `${dayOfWeek} ${date.toString()} ${month}`;
            // create date format for attaching to button
            const dataDate = `${year}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, ' ')}`;

            // INSERT BUTTON INTO DAY HEADER - ⚠ unfortunately the API provided props will not allow rendering a module here so had to mutate DOM directly ⚠
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
};

export default Calendar;