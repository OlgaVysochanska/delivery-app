import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectShops } from 'redux/shops/shopsSelectors';
import { fetchShops } from 'redux/shops/shopsOperations';
import { fetchGoods } from 'redux/goods/goodsOperations';
import { selectGoods } from 'redux/goods/goodsSelectors';
import { Loader } from 'components/Loader/Loader';

import styles from './ShopList.module.css';

const ShopList = () => {
  const [selectedShop, setSelectedShop] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const shops = useSelector(selectShops);
  const goods = useSelector(selectGoods);

  const shopBtns = shops.map(item => (
    <li key={item._id}>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(fetchGoods(item.name));
          setSelectedShop(item._id);
          localStorage.setItem('shop', item.name);
        }}
      >
        {item.name}
      </button>
    </li>
  ));

  return (
    <ul>
      {shops.length === 0 && <Loader />}
      {shopBtns}
      {goods.length === 0 && shops.length !== 0 && (
        <p>Choose a shop, please!</p>
      )}
    </ul>
  );
};

export default ShopList;
