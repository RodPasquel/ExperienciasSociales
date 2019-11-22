/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
/* import CalendarRank from './CalendarRank'; */
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import Background from '../assets/images/background-home.jpg';
import '../assets/styles/components/Search.scss';

const Search = () => {

  return (
    <section className='search' style={{ backgroundImage: `url(${Background})` }}>
      <section className='search__container'>
        <h1 className='search__title'>Busca y reserva una experiencia</h1>
        <form action='' className='search__form'>
          <div>
            <label htmlFor='inputLocation'> Dónde </label>
            <input id='inputLocation' className='input' type='text' placeholder='México' />
          </div>
          <div>
            <label htmlFor='divCalendar'> Fecha de llegada y salida </label>
            {/* <CalendarRank
              disableDates={date => date < new Date().getTime()}
            /> */}
            <Calendar />
          </div>
          {/* <div>
            <label htmlFor='inputPeople'> Personas que asistiran</label>
            <input id='inputPeople' className='input' type='number' min='1' placeholder='1' />
          </div> */}
          <div>
            <Link to='/result'>
              <button className='button' type='button'>Buscar</button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Search;
