import './weeklytopicbar.css';

function WeeklyTopicBar({ data, dateStart }) {

    // check if dateStart is empty, do not run rest of code is empty
    if(typeof dateStart === "undefined")
    {
        return;
    }

    const days = [];

    // Form an array of the days that are currently being displayed
    for (let i = 0; i < 7; i++) {
        const date = new Date(dateStart); // Create a new Date object based on the start of the current selected week
        date.setDate(dateStart.getDate() + i); // Increment the date by i days (0-6) to get the date for the current day of the week

        // Extract the year, month, and day from the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Add the dates to the days array as a string
        days.push(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
    }

    // FILTER THE DATA ARRAY TO INCLUDE ONLY ITEMS THAT OCCUR ON THE CURRENT WEEK
    const filterDataWeeklyBar = data.filter(item => {

        // loop around days array - if the date of the data object (calendar event) is one of the dates in the days array 
        // then select it to add to the filterDataWeeklyBar array of objects
        for(let i = 0; i < days.length; i++)
        {
            if(item.start.startsWith(days[i]))
            {
                return true;
            }
        }
        // return false outside the for loop to allow loop to continue
        return false;

    });

    return <>
        <div className="weeklyTopicBar-container">
            <h1>Weekly Topics:</h1>
            <h2 className="weeklyTopicBar-heading">
                {filterDataWeeklyBar
                .filter(item => !item.title.includes('☕ Break Time ☕')
                                    && !item.title.includes('🥗 Lunch Break 🥗')
                                    && !item.title.includes('☁ Mindset ☁')
                                    && !item.title.toLowerCase().includes('continued')
                                    && !item.title.toLowerCase().includes('presentations')
                )
                .map(item => item.title)
                .join(' - ')
                }
            </h2>
        </div>
    </>
    
}

export default WeeklyTopicBar;