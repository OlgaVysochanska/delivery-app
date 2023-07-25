import { useState, useEffect } from 'react';

// import { useJsApiLoader } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';

import useForm from 'shared/hooks/useForm';
import { getBrowserlocation } from 'utils/getBrowserLocation';
import initialState from './initialState';
import Input from 'shared/components/Input/Input';
import GoogleMaps from 'components/GoogleMaps/GoogleMaps';

import styles from './OrderForm.module.css';

const OrderForm = ({ onSubmit, listOfOrders, total }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [addressInp, setAddressInp] = useState('');

  const { state, setState, handleChange } = useForm({
    initialState,
  });

  const handleSubmit = (e, data) => {
    e.preventDefault();
    onSubmit(data);
    setState({ ...initialState });
  };

  const currentShop = localStorage.getItem('shop');
  const { email, name, phone } = state;

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries: ['places'],
  // });

  const autocomleteOptions = {
    componentRestrictions: { country: 'ua' },
    language: 'uk',
  };

  const handleAutocompleteLoad = autocomplete => {
    setAutocomplete(autocomplete);
  };

  const handlePlaceSelect = (autocomplete, setAddressInp, setUserLocation) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        setAddressInp(place.formatted_address);

        setUserLocation({ lat, lng });
      }
    }
  };

  useEffect(() => {
    getBrowserlocation()
      .then(currentLoc => {
        setUserLocation(currentLoc);
      })
      .catch(defaultCenter => {
        setUserLocation(defaultCenter);
      });
  }, []);

  return (
    <>
      {/* {isLoaded ? <GoogleMaps center={userLocation} /> : <p>Loading maps...</p>} */}
      <GoogleMaps userLocation={userLocation} />
      <form
        className={styles.form}
        onSubmit={e => {
          handleSubmit(e, {
            ...state,
            address: addressInp,
            owner: email,
            shop: currentShop,
            goods: listOfOrders,
            totalPrice: total,
          });
        }}
      >
        <Autocomplete
          options={autocomleteOptions}
          onLoad={handleAutocompleteLoad}
          onPlaceChanged={() =>
            handlePlaceSelect(autocomplete, setAddressInp, setUserLocation)
          }
        >
          <Input
            id="address"
            label="Your address"
            name="address"
            value={addressInp}
            placeholder="your address"
            type="text"
            handleChange={handleChange}
          />
        </Autocomplete>
        <Input
          id="name"
          label="Your name"
          name="name"
          value={name}
          placeholder="your name"
          type="text"
          handleChange={e => handleChange(e)}
        />
        <Input
          id="email"
          label="Your email"
          name="email"
          value={email}
          placeholder="your email"
          type="email"
          handleChange={e => handleChange(e)}
        />
        <Input
          id="phone"
          label="Your phone"
          name="phone"
          value={phone}
          placeholder="your phone"
          type="tel"
          handleChange={handleChange}
        />

        <div className={styles.button}>
          Total: {''} {total}
        </div>
        <button className={styles.button}>SUBMIT YOUR ORDER</button>
      </form>
    </>
  );
};

export default OrderForm;
