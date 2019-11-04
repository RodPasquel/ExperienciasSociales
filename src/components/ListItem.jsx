import React from 'react';

const ListItem = () => (
  <div className='listItem-item'>
    <img
      className='listItem-item__img'
      src='https://images.pexels.com/photos/1816692/pexels-photo-1816692.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
      alt='People'
    />
    <div className='listItem-item__details'>
      {/* <div className='listItem-item__details--icons'>
        <img src='./imagenes/carousel/iconos/icono-mas.png' alt='Plus' />
        <img src='./imagenes/carousel/iconos/icons8-play-64.png' alt='Play' />
      </div> */}
      <div className='listItem-item__details--info'>
        <p className='listItem-item__details--title'>Titulo descriptivo</p>
        <p className='listItem-item__details--subtitle'>2019 16+ 14 minutos</p>
      </div>
    </div>
  </div>
);

export default ListItem;
