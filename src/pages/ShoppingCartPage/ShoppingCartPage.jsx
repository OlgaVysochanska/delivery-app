import { useSelector, useDispatch } from 'react-redux';

import { LoadScript } from '@react-google-maps/api';

import OrderForm from 'components/OrderForm/OrderForm';
import OrderList from 'components/OrderList/OrderList';

import {
  orderedGoods,
  selectIsLoadingOrders,
} from 'redux/orders/ordersSelectors';
import { createOrder } from 'redux/orders/ordersOperations';

import { Loader } from 'components/Loader/Loader';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
  const goods = JSON.parse(localStorage.getItem('orders'))
    ? JSON.parse(localStorage.getItem('orders'))
    : [];
  const dispatch = useDispatch();

  const { totalPrice } = useSelector(orderedGoods);
  const isLoading = useSelector(selectIsLoadingOrders);

  const submitForm = data => {
    dispatch(createOrder(data));
  };

  const mapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const libraries = ['places'];

  return (
    <LoadScript googleMapsApiKey={mapKey} libraries={libraries}>
      <div className={styles.content}>
        <OrderForm
          onSubmit={submitForm}
          listOfOrders={goods}
          total={totalPrice}
        />
        {isLoading ? <Loader /> : <OrderList />}
      </div>
    </LoadScript>
  );
};

export default ShoppingCartPage;
