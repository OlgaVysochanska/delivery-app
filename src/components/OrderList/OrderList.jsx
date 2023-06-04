import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setQuantity, setTotalPrice } from 'redux/orders/ordersSlice';

import styles from './OrderList.module.css';

const OrderList = ({ listOfOrders: goods }) => {
  const [quan, setQuan] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    dispatch(setQuantity({ quantity: Number(e.target.value), _id: data }));
    setQuan(Number(e.target.value));
  };

  useEffect(() => {
    if (goods.length !== 0) {
      dispatch(
        setTotalPrice(
          goods
            .map(item => {
              return item.price * item.quantity;
            })
            .reduce((acc, prod) => {
              acc += prod;
              return acc;
            })
        )
      );
    }
    dispatch(setTotalPrice(0));
  }, [quan]);

  const listOfOrders = goods.map(item => (
    <li key={item._id}>
      <div>
        <img className={styles.img} src={item.url} alt="Food" width="300" />
        <p className={styles.goodTitle}>{item.title}</p>
        <p>Price: {item.price}</p>
        <label>
          Quantity:{' '}
          <input
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
