import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, latitud, longitug }) => {
  const mapStyles = {
    width: '100%',
    height: '350px',
  };

  console.log('lat', latitud);
  console.log('long', longitug);
  return (
    <Map
      google={google}
      style={mapStyles}
      zoom={15}
      initialCenter={{ lat: latitud, lng: longitug }}
    >
      <Marker
        position={{ lat: latitud, lng: longitug }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY_GOOGLE_MAPS,
})(MapContainer);
