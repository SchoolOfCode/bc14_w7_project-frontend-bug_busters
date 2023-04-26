import './weeklytopicbar.css';

function WeeklyTopicBar({ data }) {

    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    const days = [];
    for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    days.push(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
    }

    const filterDataWeeklyBar = data.filter(item => {
        const itemDate = new Date(item.start);
        const itemDayOfWeek = itemDate.getDay();
        const itemDiff = itemDate.getDate() - itemDayOfWeek + (itemDayOfWeek === 0 ? -6 : 1);
        const itemMonday = new Date(itemDate.setDate(itemDiff));
        const itemDays = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(itemMonday);
            date.setDate(itemMonday.getDate() + i);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            itemDays.push(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
        }
        return itemDays.includes(days[0]);
    });

    return <>
        <div className="weeklyTopicBar-container">
            <h1>Weekly Topics:</h1>
            <h2 className="weeklyTopicBar-heading">{filterDataWeeklyBar.filter(item => !item.title.includes('☕ Break Time ☕') && !item.title.includes('🥗 Lunch Break 🥗')).map(item => item.title).join(' - ')}</h2>
        </div>
    </>
    
}

export default WeeklyTopicBar;