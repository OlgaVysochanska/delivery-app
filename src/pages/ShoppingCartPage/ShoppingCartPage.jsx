import { useSelector, useDispatch } from 'react-redux';

import OrderForm from 'components/OrderForm/OrderForm';
import OrderList from 'components/OrderList/OrderList';

import { orderedGoods } from 'redux/orders/ordersSelectors';
import { createOrder } from 'redux/orders/ordersOperations';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
  const { goods } = useSelector(orderedGoods);
  const { totalPrice } = useSelector(orderedGoods);

  console.log(totalPrice);

  const dispatch = useDispatch();

  const submitForm = (e, data) => {
    e.preventDefault();
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
