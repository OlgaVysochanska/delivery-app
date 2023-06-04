import { useSelector, useDispatch } from 'react-redux';

import OrderForm from 'components/OrderForm/OrderForm';
import OrderList from 'components/OrderList/OrderList';

import { orderedGoods } from 'redux/orders/ordersSelectors';
import { createOrder } from 'redux/orders/ordersOperations';

const ShoppingCartPage = () => {
  const { goods } = useSelector(orderedGoods);

  const dispatch = useDispatch();

  const submitForm = (e, data) => {
    e.preventDefault();
    dispatch(createOrder(data));
  };

  return (
    <div>
      <OrderForm onSubmit={submitForm} listOfOrders={goods} />
      <OrderList listOfOrders={goods} />
    </div>
  );
};

export default ShoppingCartPage;
