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

    this.state = {
      currentDay: new Date()
    }
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  nextDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)) });
  }

  previousDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={this.previousDay}>
                <FaAngleLeft />
            </button>
            <p>{this.months[this.state.currentDay.getMonth()].substring(0, 3)} {this.state.currentDay.getDate()}</p>
            <button onClick={this.nextDay}>
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
          <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
        </div>
      </div>
    )
  }
}