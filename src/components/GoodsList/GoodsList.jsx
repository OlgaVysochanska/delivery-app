import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGoods, removeItem } from 'redux/orders/ordersSlice';
import { selectGoods } from 'redux/goods/goodsSelectors';

import styles from './GoodsList.module.css';

const GoodsList = () => {
  const [selectedFood, setSelectedFood] = useState([]);
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();
  const localFood = localStorage.getItem('orders');

  useEffect(() => {
    if (localFood !== null && localFood.length !== 0) {
      const selected = JSON.parse(localStorage.getItem('orders'));
      setSelectedFood([...selected.map(item => item._id)]);
    }
  }, [localFood]);

  const addToCart = data => {
    dispatch(setGoods(data));
    setSelectedFood([...selectedFood, data._id]);
  };

  const removeFromCart = data => {
    dispatch(removeItem(data));
    setSelectedFood(selectedFood.filter(item => item._id !== data._id));
  };

  const goodsList = goods.map(item => {
    return (
      <li key={item._id}>
        <div>
          <img className={styles.img} src={item.url} alt="Food" width="240" />
          <p className={styles.goodTitle}>{item.title}</p>
          <p>Price: {item.price}</p>
        </div>
        {selectedFood.includes(item._id) ? (
          <button
            className={styles.button}
            onClick={() => removeFromCart(item)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              if (
                JSON.parse(localStorage.getItem('orders')).find(
                  ord => ord.shop !== item.shop
                )
              ) {
                alert(
                  'You can order products only from one shop. You already have items from another shop in your cart!'
                );
                return;
              }
              return addToCart(item);
            }}
          >
            Add to cart
          </button>
        )}
      </li>
    );
  });

  return <ul className={styles.list}>{goodsList}</ul>;
};

export default GoodsList;
