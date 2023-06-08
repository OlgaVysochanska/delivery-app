import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectShops } from 'redux/shops/shopsSelectors';
import { fetchShops } from 'redux/shops/shopsOperations';
import { fetchGoods } from 'redux/goods/goodsOperations';

import styles from './ShopList.module.css';

const ShopList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
    dispatch(fetchGoods('FastGood'));
  }, [dispatch]);

  const shops = useSelector(selectShops);

  const shopBtns = shops.map(item => (
    <li key={item._id}>
      <button
        className={styles.buttonShop}
        onClick={() => {
          dispatch(fetchGoods(item.name));
        }}
      >
        {item.name}
      </button>
    </li>
  ));

  return <ul>{shopBtns}</ul>;
};

export default ShopList;
