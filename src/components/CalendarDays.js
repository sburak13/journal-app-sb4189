function CalendarDays(props) {
    let dayInProgress = new Date(props.currentDay.getFullYear(), props.selectedMonth, 1);
    let weekdayOfFirstDay = dayInProgress.getDay();
    let currentDays = [];

    const emoji = "😀"

    for (let day = 0; day < 42; day++) { // 6 weeks in a calendar * 7 days = 42 days in a calendar

        // Set the first day of the calendar based on what day of the week that first day lies on
        if (day === 0 && weekdayOfFirstDay === 0) {
            dayInProgress.setDate(dayInProgress.getDate() - 7);
        } else if (day === 0) {
            dayInProgress.setDate(dayInProgress.getDate() + (day - weekdayOfFirstDay));
        } else {
            dayInProgress.setDate(dayInProgress.getDate() + 1);
        }

        let calendarDay = {
            currentDay: (dayInProgress.toDateString() === props.currentDay.toDateString()),
            dayInMonth: (dayInProgress.getMonth() === props.selectedMonth),
            date: (new Date(dayInProgress)),
            month: dayInProgress.getMonth(),
            number: dayInProgress.getDate(),
            year: dayInProgress.getFullYear(),
            future: dayInProgress > props.currentDay
        }

        currentDays.push(calendarDay);
    }
  
    return (
        <div className="table-content">
            {
                currentDays.map((day, index) => {
                    return (
                        <div key={index} className={"calendar-day" + (day.dayInMonth ? " day-in-month" : "") + (day.currentDay ? " current-day" : "") + (day.future ? " future" : "")}
                                onClick={() => props.selectDay(day)}>
                            {!day.future && <p className="emoji">{emoji}</p>}
                            <p>{day.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
  
  export default CalendarDays;