import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date() };
  };

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };

  render() {
    const { startDate } = this.state;
    return (
      <DatePicker
        className='divCalendar'
        selected={startDate}
        onChange={this.handleChange}
        minDate={new Date()}
        dateFormat='dd/MM/yyyy'
        placeholderText='Click to select a date'
      />
    );
  }
}

export default Calendar;
