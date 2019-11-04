import React from 'react';
/* import CalendarRank from './CalendarRank'; */
import Calendar from './Calendar';
import Background from '../assets/images/background-home.jpg';
import '../assets/styles/components/Search.scss';

const Search = () => {

  return (
    <section className='search' style={{ backgroundImage: `url(${Background})` }}>
      <section className='search__container'>
        <h1 className='search__title'>Busca y reserva alojamiento</h1>
        <form action='' className='search__form'>
          <div>
            <label htmlFor=''>Dónde</label>
            <input id='' className='input' type='text' placeholder='México' />
          </div>
          <div>
            <label htmlFor=''>Fecha de llegada y salida</label>
            {/* <CalendarRank
              disableDates={date => date < new Date().getTime()}
            /> */}
            <Calendar />
          </div>
          <div>
            <label htmlFor=''>Huéspedes</label>
            <input id='' className='input' type='number' min='1' placeholder='1' />
          </div>
          <div>
            <button className='button' type='button'>Buscar</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Search;