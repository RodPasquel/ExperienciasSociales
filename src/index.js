import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import fetch from 'node-fetch';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  startDate: new Date(2019, 11, 23, 18, 30),
  view: [],
  experiences: [
    {
      '_id': '5dc3ae6716ecdc3641838849',
      'title': 'Visita a un taller de sombreros',
      'description': 'Ven y conoce el proceso de elaboraciÃ³n artesanal de un sombrero. Compra directo a los productores y ayúdalos a preservar sus tradiciones y modo de vida.',
      'problems': [
        'Productores Abandonados',
        'Consumo Local',
      ],
      'location': [
        'Becal|Becal',
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
      'image1-cover': 'https://cdn.mexicodestinos.com/lugares/becal-campeche-galeria-min.jpg',
      'image2': 'https://mundo.sputniknews.com/cultura/201711141073954828-mexico-cultura-conservacion-tradicion-sombreros/',
      'image3': 'http://amigosgrandesmaestros.org/wp-content/uploads/2018/03/Eulogio_Chi_Tzel.jpg',
    },
    {
      '_id': '5dc3af2716ecdc364183991b',
      'title': 'Tour de arte urbano en centro histórico',
      'description': 'Disfruta este recorrido por la ciudad conociendo los mejores murales de arte urbano, su historia y logros.',
      'problems': [
        'Arte Urbano',
        'Expresión Juvenil',
      ],
      'location': [
        'CuauhtÃ©moc',
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
      'image1-cover': 'https://www.maspormas.com/img/2017/01/Corredor-de-Arte-Urbano-Buenavista-Guerrero.-Lulu%CC%81-Urdapilleta-8.jpg',
      'image2': 'https://www.maspormas.com/img/2017/01/Corredor-de-Arte-Urbano-Buenavista-Guerrero.-Lulu%CC%81-Urdapilleta-6.jpg',
      'image3': 'https://www.maspormas.com/img/2017/01/Corredor-de-Arte-Urbano-Buenavista-Guerrero.-Lulu%CC%81-Urdapilleta-3.jpg',
    },
    {
      '_id': '5dc7311816ecdc3641db8a00',
      'title': 'Tour por bazares de productores locales',
      'description': 'Disfruta este maravilloso tour de bazares locales  y descubre las propuestas en diseñoo, gastronomí­a y arte de productores independientes.',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'Cuauhtémoc',
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
      'image1-cover': 'https://media.timeout.com/images/103872100/750/422/image.jpg',
      'image2': 'https://media.gq.com.mx/photos/5be9ed343183a9a346ae0c2f/master/w_1024%2cc_limit/mercados_y_bazares_7889.jpg',
      'image3': 'https://www.elblogdeyes.com/wp-content/uploads/2019/09/341-elblogdeyes-imagen.jpg',
    },
    {
      '_id': '5dd1dd9dfbf086ac18c84b71',
      'title': 'Visita a un temazcal',
      'description': 'Ven y descubre los origenes, secretos y beneficios del temazcal: una poderosa terapia para vincularse con la tierra',
      'problems': [
        'Tradiciones',
      ],
      'location': [
        'Tlanepantla',
        'Ciudad de México',
      ],
      'locationLat': '19.4283701',
      'locationLong': '-99.2204391',
      'locationZoom': '22',
      'capacity': 6,
      'cost': 1800,
      'duration': 180,
      'category': [
        'Productores',
        'ArtesanÃ­as',
      ],
      'image1-cover': 'http://www.ciudadypoder.mx/wp-content/uploads/2017/01/temazcal.jpg',
      'image2': 'https://www.pueblosmexico.com.mx/IMG/arton27798.jpg',
      'image3': 'https://images.inmexico.com/2017/12/OneOnly-Palmilla_Temazcal-864x576.jpg',
    },
    {
      '_id': '5dd1dd9dfbf086ac18c84b17',
      'title': 'La ruta de la miel',
      'description': 'Con esta experiencia aprenderÃ¡s sobre la vida y caracterÃ­sticas de las abejas. La producción, los tipos y las bondades de la miel y sabrás cómo identificar una miel pura. En el recorrido podrás extraer y degustar miel de una colmena de forma segura.',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'Tecajete',
        'Hidalgo',
      ],
      'locationLat': '19.9338539',
      'locationLong': '-98.6442606',
      'locationZoom': '23',
      'capacity': 8,
      'cost': 1600,
      'duration': 220,
      'category': [
        'Productores',
        'Comercio justo',
      ],
      'image1-cover': 'https://www.zocalo.com.mx/images/sized/images/uploads/articles/ofrecera-621x354.jpg',
      'image2': 'https://www.universomiel.es/wp-content/uploads/tipos-de-mielcuchara1-e1456684743889.jpg',
      'image3': 'https://image.freepik.com/foto-gratis/abeja_95678-8.jpg',
    },
    {
      '_id': '5dd1dd9dfbf086ac18c84b61',
      'title': 'Elabora tu propio alebrije',
      'description': 'Ven y conoce la historia y proceso de elaboración de una de las artesanías más representativas de nuestro país: los alebrijes.',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'La Merced',
        'Ciudad de México',
      ],
      'locationLat': '19.4296292',
      'locationLong': '-99.1354102',
      'locationZoom': '23',
      'capacity': 8,
      'cost': 1400,
      'duration': 180,
      'category': [
        'Productores',
        'ArtesanÃ­as',
      ],
      'image1-cover': 'http://www.pueblanoticias.com.mx/wp-content/uploads/2019/10/alebrijes-2.jpg',
      'image2': 'https://www.rioaxaca.com/wp-content/uploads/2019/04/tilca.jpg',
      'image3': 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/inline-images/alebrijes-arrazola.jpg',
    },
    {
      '_id': '5dd1dd9dfbf086ac18c85c71',
      'title': 'La ruta del café',
      'description': 'Ven a esta grandiosa cata de café mexicano. Conoce su origen y todo el proceso que sigue desde el productor hasta que llega a tu taza',
      'problems': [
        'Productores locales',
        'Comercio Justo',
      ],
      'location': [
        'Cuauhtémoc',
        'Ciudad de México',
      ],
      'locationLat': '19.418996',
      'locationLong': '-99.162907',
      'locationZoom': '17',
      'capacity': 10,
      'cost': 250,
      'duration': 120,
      'category': [
        'GastronomÃ­a',
      ],
      'image1-cover': 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/inline-images/ruta-cafe.jpg',
      'image2': 'shorturl.at/dyHLS',
      'image3': 'https://cafesorus.es/wp-content/uploads/cata-brasilen%CC%83a.jpg',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers()); //applyMiddleware(thunk));//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
