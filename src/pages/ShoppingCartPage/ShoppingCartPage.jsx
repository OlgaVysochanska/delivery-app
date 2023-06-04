import { useSelector, useDispatch } from 'react-redux';

import OrderForm from 'components/OrderForm/OrderForm';
import OrderList from 'components/OrderList/OrderList';

import { orderedGoods } from 'redux/orders/ordersSelectors';
import { createOrder } from 'redux/orders/ordersOperations';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
  const goods = JSON.parse(localStorage.getItem('orders'))
    ? JSON.parse(localStorage.getItem('orders'))
    : [];
  const dispatch = useDispatch();

  const { totalPrice } = useSelector(orderedGoods);

  // const arrayOfId = goods.map(item => item._id);

  const submitForm = data => {
    dispatch(createOrder(data));
  };

  return (
    <div className={styles.content}>
      <OrderForm
        onSubmit={submitForm}
        listOfOrders={goods}
        total={totalPrice}
      />
      <OrderList listOfOrders={goods} />
    </div>
  );
};

export default ShoppingCartPage;
