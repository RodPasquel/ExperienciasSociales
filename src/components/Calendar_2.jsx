import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import { setState } from '../actions';

import 'react-datepicker/dist/react-datepicker.css';
import reducer from '../reducers';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date() };
  };

  handleChange = (startDate) => {
    console.log('startDate es', startDate);
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
        dateFormat='yyyy/MM/dd'
        placeholderText='Click to select a date'
      />
    );
  }
}

//export default Calendar;

const mapStateToProps = state => ({
  startDate: state.startDate,
});

/*
function mapStateToProps(state, ownProps) {
  return { startDate: state.startDate };
};
*/
/*
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(setState, dispatch) };
};
*/
/*
const mapDispatchToProps = {
  setState,
};
*/
const mapDispatchToProps = dispatch => ({
  setState: startDate => dispatch(setState(startDate)),
});

/*
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(instructorActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

*/

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
