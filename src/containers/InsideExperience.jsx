import React from 'react';
import GoogleMaps from '../components/GoogleMaps';
import '../assets/styles/containers/InsideExperience.scss';

const InsideExperience = () => {
  return (
    <div className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
          <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' />
        </div>
        {/* Descripción del aparatdo */}
        <div className='infoExperience'>
          <h2 className='insideTitle'> Vivie la experiencia de </h2>
          <br/>
          <p className='insideDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <h3>Duración</h3>
          <p className='insideTime'> 4 horas </p>
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
    </div>
  );
};

export default InsideExperience;
