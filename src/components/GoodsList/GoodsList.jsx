import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGoods } from 'redux/orders/ordersSlice';
import { selectGoods } from 'redux/goods/goodsSelectors';

const GoodsList = () => {
  const goods = useSelector(selectGoods);

  const dispatch = useDispatch();

  const addToCart = data => {
    console.log(data, 'in add to cart');
    dispatch(setGoods(data));
  };

  const goodsList = goods.map(item => (
    <li key={item._id}>
      <div>
        <img src={item.url} alt="Food" width="200" />
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  ));

  return <ul>{goodsList}</ul>;
};

export default GoodsList;
