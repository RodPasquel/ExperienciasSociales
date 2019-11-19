import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'data': [
    {
      '_id': '5dc3ae6716ecdc3641838849',
      'title': 'Visita a un taller de sombreros',
      'description': 'Ven y conoce el proceso de elaboración artesanal de un sobrero, pudiendo comprar directo a los productores y ayudandolos a preservar su trabajo artesanal y su modo de vida.',
      'problems': [
        'Productores Abandonados',
        'Consumo Local',
      ],
      'location': [
        'Bécal|Becal',
        'Campeche',
      ],
      'locationLat': '20.4386123',
      'locationLong': '-90.0310331',
      'locationZoom': '17',
      'capacity': 10,
      'cost': 500,
      'duration': 180,
      'category': [
        'Aventura',
        'Cultural',
        'Productores',
      ],
      'image1-cover': 'http://dummyimage.com/118x196.jpg/cc0000/ffffff',
      'image2': 'http://dummyimage.com/118x196.jpg/cc4300/ffffff',
      'image3': 'http://dummyimage.com/118x196.jpg/ff4444/ffffff',
    },
    {
      '_id': '5dc3af2716ecdc364183991b',
      'title': 'Tour de arte urbano en centro histórico',
      'description': 'Gran visita por la ciudad conciendo los mejores murales de arte urbano, su historia y logros.',
      'problems': [
        'Arte Urbano',
        'Expresión Juvenil',
      ],
      'location': [
        'Cuauhtemoc',
        'Ciudad de México',
      ],
      'locationLat': '19.4278557',
      'locationLong': '-99.137835',
      'locationZoom': '16',
      'capacity': 6,
      'cost': 300,
      'duration': 120,
      'category': [
        'Aventura',
        'Cultural',
      ],
      'image1-cover': 'http://dummyimage.com/118x196.jpg/cc0000/ffffff',
      'image2': 'http://dummyimage.com/118x196.jpg/cc4300/ffffff',
      'image3': 'http://dummyimage.com/118x196.jpg/ff4444/ffffff',
    },
    {
      '_id': '5dc7310716ecdc3641db87e7',
      'title': 'Experiencia de café tradicional',
      'description': 'Prueba el mejor café de la zona, conoce su origen, y todo el proceso que se sigue para que lelgue a tu taza.',
      'problems': [
        'Conciencia de producto',
        'Comercio Justo',
      ],
      'location': [
        'Cuauhtemoc',
        'Ciudad de México',
      ],
      'locationLat': '19.418996',
      'locationLong': '-99.162907',
      'locationZoom': '16',
      'capacity': 10,
      'cost': 100,
      'duration': 120,
      'category': [
        'Gastronomia',
      ],
      'image1-cover': 'http://dummyimage.com/118x196.jpg/cc0000/ffffff',
      'image2': 'http://dummyimage.com/118x196.jpg/cc4300/ffffff',
      'image3': 'http://dummyimage.com/118x196.jpg/ff4444/ffffff',
    },
    {
      '_id': '5dc7311816ecdc3641db8a00',
      'title': 'Tour por bazares de productores locales',
      'description': 'Visita diversos productores locales concentrados en los más interesantes bazares locales. Conoce sus propuestas y como realizan las cosas',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'Cuauhtemoc',
        'Ciudad de México',
      ],
      'locationLat': '19.4188487',
      'locationLong': '-99.1626212',
      'locationZoom': '16',
      'capacity': 6,
      'cost': 250,
      'duration': 120,
      'category': [
        'Productores',
        'Cultural',
      ],
      'image1-cover': 'http://dummyimage.com/118x196.jpg/cc0000/ffffff',
      'image2': 'http://dummyimage.com/118x196.jpg/cc4300/ffffff',
      'image3': 'http://dummyimage.com/118x196.jpg/ff4444/ffffff',
    },
    {
      '_id': '5dd1dd9dfbf086ac18c84b71',
      'title': 'Tour de comida local preparada de manera tradicional',
      'description': 'Prueba los mejores platillos locales cocinados de la manera tradicional por gente local que los ha preparado por generaciones',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'Coyoacan',
        'Ciudad de México',
      ],
      'locationLat': '19.3499891',
      'locationLong': '-99.163751',
      'locationZoom': '17',
      'capacity': 12,
      'cost': 450,
      'duration': 180,
      'category': [
        'Productores',
        'Gastronomia',
      ],
      'image1-cover': 'http://dummyimage.com/118x196.jpg/cc0000/ffffff',
      'image2': 'http://dummyimage.com/118x196.jpg/cc4300/ffffff',
      'image3': 'http://dummyimage.com/118x196.jpg/ff4444/ffffff',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
