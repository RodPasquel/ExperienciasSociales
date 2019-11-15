import React from 'react';
import GoogleMaps from '../components/GoogleMaps';
import '../assets/styles/containers/InsideExperience.scss';

const InsideExperience = () => {
  return (
    <section className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
          <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' />
        </div>
        {/* Descripción del aparatdo */}
        <div className='infoExperience'>
          <h2 className='insideTitle'> Vivie la experiencia de </h2>
          <br />
          <p className='insideDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className='insideImages'>
            <img src='https://images.pexels.com/photos/209331/pexels-photo-209331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate1' />
            <img src='https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate2' />
            <img src='https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate3' />
          </div>
          <h3>Duración</h3>
          <p className='insideTime'> 4 horas </p>
          <h3>Costo por persona</h3>
          <p className='insideCost'> $ 1200 </p>
          <h3>Ubicación</h3>
          <br />
          {/* Mapa de ubicación */}
          <div className='locationMap'>
            <GoogleMaps />
          </div>
          <br />
          <button className='button' type='button'>Realizar reservación </button>
        </div>
      </div>
    </section>
  );
};

export default InsideExperience;
