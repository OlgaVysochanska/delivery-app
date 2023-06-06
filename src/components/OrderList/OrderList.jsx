import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setQuantity,
  setTotalPrice,
  removeItem,
} from 'redux/orders/ordersSlice';
import { orderedGoods } from 'redux/orders/ordersSelectors';

import styles from './OrderList.module.css';

const OrderList = () => {
  const [goodsList, setGoodsList] = useState([]);
  const { goods } = useSelector(orderedGoods);
  const localFood = localStorage.getItem('orders');

  useEffect(() => {
    setGoodsList(goods);
  }, [goods]);

  useEffect(() => {
    try {
      const orders = localFood ? JSON.parse(localFood) : [];
      setGoodsList(orders);
    } catch (e) {
      console.log(e.message);
    }
  }, [localFood]);

  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    localStorage.removeItem('orders');
    dispatch(setQuantity({ quantity: Number(e.target.value), _id: data }));
    localStorage.setItem('orders', JSON.stringify(goods));
    const orders = JSON.parse(localFood);
    setGoodsList(orders);
  };

  const removeFromCart = data => {
    dispatch(removeItem(data));
    localStorage.removeItem('orders');
    localStorage.setItem('orders', JSON.stringify(goods));
  };

  useEffect(() => {
    if (goodsList.length !== 0) {
      dispatch(
        setTotalPrice(
          goodsList
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
  }, [dispatch, goodsList]);

  const listOfOrders = goodsList.map(item => (
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

  console.log(goodsList, 'goodsList');

  return <ul className={styles.list}>{listOfOrders}</ul>;
};

export default OrderList;
