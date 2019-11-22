import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { id, title, image3, cost, duration } = props;

  return (
    <div className='listItem-item'>
      <Link to='/inside'>
        <img
          className='listItem-item__img'
          src={image3}
          alt={title}
        />
      </Link>
      {/* <img className='listItem-item__img' src={image3} alt={title}  /> */}

      <div className='listItem-item__details'>
        <div className='listItem-item__details--info'>
          <p className='listItem-item__details--title'>{title}</p>
          <p className='listItem-item__details--subtitle'>{`$ ${cost}`}</p>
          <p className='listItem-item__details--subtitle'>{`${duration} minutos`}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(ListItem);
