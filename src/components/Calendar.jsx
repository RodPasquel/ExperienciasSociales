import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { setState, getState } from '../actions';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/*
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date() };
  };
  */
const Calendar = (props) => {
  const { startDate } = props;

  const handleChange = (startDate) => {
    props.setState(startDate);
  };

  // render() {
  // return (
  //const { startDate } = this.state;
  return (
    <DatePicker
      className='divCalendar'
      selected={startDate}
      // onChange={this.handleChange}
      onChange={handleChange}
      minDate={new Date()}
      dateFormat='yyyy/MM/dd'
      //placeholderText='Click to select a date'
      placeholderText={startDate}
    /*
    className='divCalendar'
      minDate={new Date()}
      dateFormat='yyyy/MM/dd'
      selected={startDate}
     // onChange={this.handleChange}
      onChange={handleChange}
       placeholderText='Click to select a date'
      //placeholderText={startDate}
      */
    />
  );
  //}
};

const mapStateToProps = (state) => {
  return {
    //startDate: state.startDate,
  };
};

const mapDispatchToProps = {
  setState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

