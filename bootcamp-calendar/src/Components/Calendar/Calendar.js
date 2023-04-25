import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import './calendar.css'


// 

export default class Calendar extends React.Component {
    render() {
      return (
        <FullCalendar
            plugins={[ timeGridPlugin ]}
            initialView="timeGridWeek"
            // CHANGE START AND END HOURS
            // START HOUR
            slotMinTime={"07:00:00"}
            // END HOUR
            slotMaxTime={"18:00:00"}

            // REMOVE DAY HEADER DEFAULT CONTENT + ALSO NEED TO SET DISPLAY NONE ON .fc-scrollgrid-sync-inner
            dayHeaderContent={function(arg) {
                return null;
            }}

            // INSERT BUTTON INTO DAY HEADER WITH FORMATTED DATE
            dayHeaderDidMount={function(arg) {
                const dateString = arg.date;
                const dateObj = new Date(dateString);
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dayOfWeek = daysOfWeek[dateObj.getDay()];
                const date = dateObj.getDate();
                const month = dateObj.getMonth() + 1; // add 1 to account for zero-based index
                const year = dateObj.getFullYear();
                const formattedDate = `${dayOfWeek} ${date.toString()} / ${month.toString()}`;
                
                // create button element
                let button = document.createElement("button");
                // add a class to the button
                button.classList.add("day-header-button");
                // add formatted date text to button
                button.innerText=`${formattedDate} - Resources`;
                // append the button to the dayHeader element
                arg.el.appendChild(button);
            }}
        />
      )
    }
  }