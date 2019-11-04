import React, { Component } from 'react';
import ReactLightCalendar from '@lls/react-light-calendar';
import '@lls/react-light-calendar/dist/index.css';

const DAY_LABELS = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];
const MONTH_LABELS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    // Get initial startDate and endDate
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
  }

  onChange = (startDate, endDate) => this.setState({ startDate, endDate });

  render = () => {
    const { startDate, endDate } = this.state;

    return (
      <ReactLightCalendar
        dayLabels={DAY_LABELS}
        monthLabels={MONTH_LABELS}
        onChange={this.onChange}
        startDate={startDate}
        endDate={endDate}
        {...this.props} // Add parent's additionnal props
      />
    );
  };
}

export default Calendar;
