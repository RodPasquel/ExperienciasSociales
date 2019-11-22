import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/InsideExperience.scss';
import { Link } from 'react-router-dom';
import GoogleMaps from '../components/GoogleMaps';

const InsideExperience = (props) => {

  /* const { id, title, description, image2, image3, cost, duration } = props; */

  const { view } = props;
  console.log('view', view);
  const cont = JSON.parse(view[0]);
  console.log('cont', cont);

  return (
    <section className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
          <img
            className='listItem-item__img'
            src={view.image3}
            alt={view.title}
          />
          {/* <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' /> */}
        </div>
        {/* Descripción del aparatdo */}
        <div className='infoExperience'>
          <h2 className='insideTitle'> view.title </h2>
          {/* <h2 className='insideTitle'> Vivie la experiencia de </h2> */}
          <br />
          <p className='insideDescription'>{view.description}</p>
          <div className='insideImages'>
            <img
              className='listItem-item__img'
              src={view.image2}
              alt={view.title}
            />
            <img
              className='listItem-item__img'
              src={view.image3}
              alt={view.title}
            />
            <img
              className='listItem-item__img'
              src={view.image2}
              alt={view.title}
            />
          </div>
          <h3>Duración</h3>
          <p className='insideTime'> {view.duration} minutos </p>
          <h3>Costo por persona</h3>
          <p className='insideCost'> $ {view.cost} </p>
          <h3>Ubicación</h3>
          <br />
          {/* Mapa de ubicación */}
          <div className='locationMap'>
            <GoogleMaps />
          </div>
          <br />
          <div>
            <Link to='/result'>
              <button type="submit" className="button">Back</button>
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
    view: state.view,
  };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InsideExperience);
