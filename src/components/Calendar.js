import React, { Component } from 'react';
import CalendarDays from './CalendarDays.js';
import './Calendar.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.currentDay = new Date()
    this.currentMonth = this.currentDay.getMonth()

    this.state = {
      selectedMonth: this.currentMonth
    }
  }

  selectDay = (day) => {
    console.log(day + " selected")
  }

  nextMonth = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth !== 11 ? prevState.selectedMonth + 1 : prevState.selectedMonth
    }));
  }

  previousMonth = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth !== 0 ? prevState.selectedMonth - 1 : prevState.selectedMonth
    }));
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{this.months[this.state.selectedMonth]}{" "}{this.currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={this.previousMonth} disabled={this.state.selectedMonth === 0}>
                <FaAngleLeft />
            </button>
            <p>{this.months[this.state.selectedMonth].substring(0, 3)}</p>
            <button onClick={this.nextMonth} disabled={this.state.selectedMonth >= this.currentMonth}>
                <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              this.weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays currentDay={this.currentDay} selectedMonth={this.state.selectedMonth} selectDay={this.selectDay} />
        </div>
      </div>
    )
  }
}