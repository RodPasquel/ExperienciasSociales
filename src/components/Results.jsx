import React from 'react';

const Results = ({ children }) => {
  return (
    <div className='results'>
      <h2 className='results__title'>Resultados de la busqueda</h2>
      {children}
    </div>
  );
};

export default Results;
