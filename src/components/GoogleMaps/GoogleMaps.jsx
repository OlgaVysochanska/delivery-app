import React, { useRef, useCallback, useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import styles from './GoogleMaps.module.css';

const containerStyle = {
  width: '400px',
  heigth: '400px',
};

const GoogleMaps = ({ userLocation }) => {
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //     libraries: ['places'],
  //   });
  const defLoc = useMemo(() => ({ lat: 43, lng: 50 }), []);
  console.log(userLocation);
  const mapRef = useRef(undefined);

  const onLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defLoc}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={userLocation}
          draggable={false}
          icon={{ url: 'images/shop.png' }}
          label={{ text: 'Current shop' }}
        />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
