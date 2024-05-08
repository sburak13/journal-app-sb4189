import React from 'react';
import CalendarDays from './CalendarDays.js';
import './Calendar.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
    const navigate = useNavigate();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const currentDay = new Date();
    const [selectedMonth, setSelectedMonth] = React.useState(currentDay.getMonth());
  
    const selectDay = (day) => {
      if (currentDay.toDateString() === day.date.toDateString()) {
        navigate('/new');
      }
    };
  
    const nextMonth = () => {
      setSelectedMonth(prevMonth => (prevMonth !== 11 ? prevMonth + 1 : prevMonth));
    };
  
    const previousMonth = () => {
      setSelectedMonth(prevMonth => (prevMonth !== 0 ? prevMonth - 1 : prevMonth));
    };
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{months[selectedMonth]} {currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={previousMonth} disabled={selectedMonth === 0}>
              <FaAngleLeft />
            </button>
            <p>{months[selectedMonth].substring(0, 3)}</p>
            <button onClick={nextMonth} disabled={selectedMonth >= currentDay.getMonth()}>
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays currentDay={currentDay} selectedMonth={selectedMonth} selectDay={selectDay} />
        </div>
      </div>
    );
  };

  export default Calendar;
