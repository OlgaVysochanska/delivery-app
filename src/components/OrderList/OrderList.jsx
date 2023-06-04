import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setQuantity, setTotalPrice } from 'redux/orders/ordersSlice';

import styles from './OrderList.module.css';

const OrderList = ({ listOfOrders: goods }) => {
  const [quan, setQuan] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    setQuan(Number(e.target.value));
    dispatch(setQuantity({ quantity: quan, _id: data }));
  };

  useEffect(() => {
    if (goods.length !== 0 && quan > 0) {
      dispatch(
        setTotalPrice(
          goods
            .map(item => item.price * quan)
            .reduce((acc, item) => {
              return acc + item;
            }, 0)
        )
      );
      return;
    }
    dispatch(setTotalPrice(0));
  }, [quan, dispatch, goods]);

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
            value={item.quantity ? item.quantity : 1}
            step="1"
            onChange={e => handleChange(e, item._id)}
          />
          <p>
            Price for {item.quantity} products:{' '}
            {item.quantity ? item.price * item.quantity : item.price}
          </p>
        </label>
      </div>
    </li>
  ));
  return <ul className={styles.list}>{listOfOrders}</ul>;
};

export default OrderList;
