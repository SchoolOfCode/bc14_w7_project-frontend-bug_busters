import './weeklytopicbar.css';

function WeeklyTopicBar({ data }) {
    // GENERATE AN ARRAY CONTAINING ALL THE DAYS IN THE CURRENT WEEK
    const today = new Date(); // Create a new Date object representing today's date
    const dayOfWeek = today.getDay(); // Get the day of the week (0-6)
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Calculate the difference between today's date and the Monday of the current week
    const monday = new Date(today.setDate(diff)); // Create a new Date object representing the Monday of the current week
    const days = [];
    // Loop through the days of the week (Monday to Sunday) and add them to the array
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday); // Create a new Date object based on the Monday of the current week
        date.setDate(monday.getDate() + i); // Increment the date by i days (0-6) to get the date for the current day of the week

        // Extract the year, month, and day from the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Add the dates to the array as a string
        days.push(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
    }

    // FILTER THE DATA ARRAY TO INCLUDE ONLY ITEMS THAT OCCUR ON THE CURRENT WEEK'S MONDAY.
    const filterDataWeeklyBar = data.filter(item => {
        const itemDate = new Date(item.start); // Create a new Date object for the start time of the item
        const itemDayOfWeek = itemDate.getDay(); // Get the day of the week (0-6) for the item
        // Calculate the difference between the item's start date and the Monday of the current week
        const itemDiff = itemDate.getDate() - itemDayOfWeek + (itemDayOfWeek === 0 ? -6 : 1); 
        // Create a new Date object representing the Monday of the current week for the item
        const itemMonday = new Date(itemDate.setDate(itemDiff));
        const itemDays = [];

         // Loop through the days of the week (Monday to Sunday) for the item and add them to the array
        for (let i = 0; i < 7; i++) {
            const date = new Date(itemMonday); // Create a new Date object based on the Monday of the current week for the item
            // Increment the date by i days (0-6) to get the date for the current day of the week for the item
            date.setDate(itemMonday.getDate() + i);

             // Extract the year, month, and day from the date
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            // Add the dates to the array as a string
            itemDays.push(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
        }
        // Check if the item occurs on the current week's Monday (i.e., the first date in the 'days' array)
        return itemDays.includes(days[0]);
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
                )
                .map(item => item.title)
                .join(' - ')
                }
            </h2>
        </div>
    </>
    
}

export default WeeklyTopicBar;