import React from 'react';
import '../assets/styles/components/ListResults.scss';

const ListResults = ({ children }) => (
  <section className='listResults'>
    <div className='listResults__container'>
      {children}
    </div>
  </section>
);

export default ListResults;
