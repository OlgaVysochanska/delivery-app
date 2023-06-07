import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setQuantity,
  setTotalPrice,
  removeItem,
} from 'redux/orders/ordersSlice';
import { orderedGoods } from 'redux/orders/ordersSelectors';

import styles from './OrderList.module.css';

const OrderList = () => {
  const { goods } = useSelector(orderedGoods);

  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    localStorage.removeItem('orders');
    dispatch(setQuantity({ quantity: Number(e.target.value), _id: data }));
    localStorage.setItem('orders', JSON.stringify(goods));
  };

  const removeFromCart = data => {
    dispatch(removeItem(data));
  };

  useEffect(() => {
    if (goods.length !== 0) {
      dispatch(
        setTotalPrice(
          goods
            .map(item => Number(item.price) * Number(item.quantity))
            .reduce((acc, item) => {
              console.log(item);
              return acc + item;
            }, 0)
        )
      );
      return;
    }
    dispatch(setTotalPrice(0));
  }, [dispatch, goods]);

  const listOfOrders = goods.map(item => (
    <li key={item._id}>
      <img className={styles.img} src={item.url} alt="Food" width="300" />
      <div className={styles.desc}>
        <div>
          <p className={styles.goodTitle}>{item.title}</p>
          <p>Price: {item.price}</p>
          <label>
            Quantity:{' '}
            <input
              className={styles.input}
              type="number"
              name="quantity"
              min="1"
              max="50"
              onChange={e => handleChange(e, item._id)}
              value={item.quantity}
              step="1"
            />
          </label>
          <p className={styles.totalPrice}>
            Price for {item.quantity} products:{' '}
            {item.quantity
              ? Number(item.price) * Number(item.quantity)
              : item.price}
          </p>
        </div>
        <button
          onClick={() => removeFromCart(item)}
          type="button"
          className={styles.delete}
        >
          X
        </button>
      </div>
    </li>
  ));

  return <ul className={styles.list}>{listOfOrders}</ul>;
};

export default OrderList;
