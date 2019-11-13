import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const mapStyles = {
    width: '100%',
    height: '350px',
  };
  return (
    <Map
      google={google}
      style={mapStyles}
      zoom={15}
      initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
    >
      <Marker
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvS6Cs7_665YYpNAi-_GMC3DXjuElkkao',
})(MapContainer);
