import React from 'react';
import GoogleMaps from '../components/GoogleMaps';
import { connect } from 'react-redux';
import '../assets/styles/containers/InsideExperience.scss';
import { Link } from 'react-router-dom';


const InsideExperience = (props) => {
  const { id, title, description, image2, image3, cost, duration } = props;
  console.log("title", title)
  return (
    <section className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
        <img
          className='listItem-item__img'
          src={image3}
          alt={title} 
        />
          {/* <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' /> */}
        </div>
        {/* Descripción del aparatdo */}
        <div className='infoExperience'>
          <h2 className='insideTitle'> {title} </h2>
          {/* <h2 className='insideTitle'> Vivie la experiencia de </h2> */}
          <br />
          <p className='insideDescription'>{description}</p>
          <div className='insideImages'>
            <img
              className='listItem-item__img'
              src={image2}
              alt={title} 
            />
            <img
              className='listItem-item__img'
              src={image3}
              alt={title} 
            />
            <img
              className='listItem-item__img'
              src={image2}
              alt={title} 
            />
{/*             <img src='https://images.pexels.com/photos/209331/pexels-photo-209331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate1' />
            <img src='https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate2' />
            <img src='https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate3' /> */}
          </div>
          <h3>Duración</h3>
          <p className='insideTime'> {duration} minutos </p>
          <h3>Costo por persona</h3>
          <p className='insideCost'> $ {cost} </p>
          <h3>Ubicación</h3>
          <br />
          {/* Mapa de ubicación */}
          <div className='locationMap'>
            <GoogleMaps />
          </div>
          <br />
          <Link to={`/reservation`}> 
            <button className='button' type='button'>Realizar reservación </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(InsideExperience);
