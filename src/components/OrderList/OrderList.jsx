import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setQuantity, setTotalPrice } from 'redux/orders/ordersSlice';

import styles from './OrderList.module.css';

const OrderList = ({ listOfOrders: goods }) => {
  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    dispatch(setQuantity({ quantity: Number(e.target.value), _id: data }));
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
      <div>
        <img className={styles.img} src={item.url} alt="Food" width="300" />
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
          <p className={styles.totalPrice}>
            Price for {item.quantity} products:{' '}
            {item.quantity
              ? Number(item.price) * Number(item.quantity)
              : item.price}
          </p>
        </label>
      </div>
    </li>
  ));

  return <ul className={styles.list}>{listOfOrders}</ul>;
};

export default OrderList;
