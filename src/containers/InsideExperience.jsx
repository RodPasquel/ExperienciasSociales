import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/InsideExperience.scss';
import { Link } from 'react-router-dom';
import GoogleMaps from '../components/GoogleMaps';

const InsideExperience = (props) => {

  /* const { id, title, description, image2, image3, cost, duration } = props;

  console.log('id', id);
  console.log('title', title);
  console.log('description', description); */

  const { experiences } = props;
  console.log('experiences', experiences);
  const cont = experiences[0];
  console.log('cont', cont);
  console.log(cont.title);

  return (
    <section className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
          <img
            className='listItem-item__img'
            src={cont.image3}
            alt={cont.title}
          />
          {/* <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' /> */}
        </div>
        {/* Descripción del aparatdo */}
        <div className='infoExperience'>
          <h2 className='insideTitle'> {cont.title} </h2>
          {/* <h2 className='insideTitle'> Vivie la experiencia de </h2> */}
          <br />
          <p className='insideDescription'>{cont.description}</p>
          <div className='insideImages'>
            <img
              className='listItem-item__img'
              src={cont.image2}
              alt={cont.title}
            />
            <img
              className='listItem-item__img'
              src={cont.image1cover}
              alt={cont.title}
            />
            <img
              className='listItem-item__img'
              src={cont.image4}
              alt={cont.title}
            />
          </div>
          <h3>Duración</h3>
          <p className='insideTime'> {cont.duration} minutos </p>
          <h3>Costo por persona</h3>
          <p className='insideCost'> $ {cont.cost} </p>
          <h3>Ubicación</h3>
          <br />
          {/* Mapa de ubicación */}
          <div className='locationMap'>
            <GoogleMaps latitud={cont.locationLat} longitug={cont.locationLong} />
          </div>
          <br />
          <div>
            <Link to='/result'>
              <button type='submit' className='button'>Back</button>
            </Link>
          </div>
          <div>
            <Link to='/reservation'>
              <button className='button' type='button'>Realizar reservación </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experiences,
  };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InsideExperience);
