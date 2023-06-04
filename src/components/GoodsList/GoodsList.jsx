import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGoods } from 'redux/orders/ordersSlice';
import { selectGoods } from 'redux/goods/goodsSelectors';

import styles from './GoodsList.module.css';

const GoodsList = () => {
  const goods = useSelector(selectGoods);

  const dispatch = useDispatch();

  const addToCart = data => {
    dispatch(setGoods(data));
  };

  const goodsList = goods.map(item => (
    <li key={item._id}>
      <div>
        <img className={styles.img} src={item.url} alt="Food" width="240" />
        <p className={styles.goodTitle}>{item.title}</p>
        <p>Price: {item.price}</p>
      </div>
      <button className={styles.button} onClick={() => addToCart(item)}>
        Add to cart
      </button>
    </li>
  ));

  return <ul className={styles.list}>{goodsList}</ul>;
};

export default GoodsList;
