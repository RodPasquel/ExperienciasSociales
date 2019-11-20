import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Menu.scss';

const Menu = ({ authUser }) => (authUser ? (
  <MenuAuth authUser={authUser} />
) : (
  <MenuNonAuth />
));

const MenuAuth = ({ authUser }) => (
  <nav className='navigation'>
    <div className='navigation__profile'>
      <span className='material-icons navigation--icon'>account_circle</span>
      <a href='#'> Nombre de usuario </a>
      <a href='#'>Cerrar Sesión</a>
    </div>
    <ul className='navigation__ul'>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Loguin
        </a>
      </li>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Contact
        </a>
      </li>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Search
        </a>
      </li>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Launchpad
        </a>
      </li>
    </ul>
  </nav>
);

const MenuNonAuth = ({ authUser }) => (
  <nav className='navigation'>
    <ul className='navigation__ul'>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Loguin
        </a>
      </li>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Contact
        </a>
      </li>
      <li className='navigation__li'>
        <a className='navigation__link' href='#'>
          Search
        </a>
      </li>
    </ul>
  </nav>
);

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Menu);
