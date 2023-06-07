import { useDispatch, useSelector } from 'react-redux';
import HistoryForm from 'components/HistoryForm/HistoryForm';

import { fetchOrders } from 'redux/orders/ordersOperations';
import {
  userOrders,
  selectIsLoadingOrders,
} from 'redux/orders/ordersSelectors';

import { Loader } from 'components/Loader/Loader';

import styles from './HistoryPage.module.css';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const submitHistory = data => {
    dispatch(fetchOrders(data));
  };

  const history = useSelector(userOrders);
  const isLoading = useSelector(selectIsLoadingOrders);

  const historyEntries = history.map(item => (
    <li className={styles.oneOrder} key={item._id}>
      <p>
        Shop:{''} {item.shop}
      </p>
      <ul>
        {item.goods.map(one => (
          <li className={styles.oneProduct} key={one._id}>
            <p>{one.title}</p>
            <p>
              Price:{''}
              {one.price}{' '}
            </p>
            <p>
              Quantity:{''}
              {one.quantity}{' '}
            </p>
          </li>
        ))}
      </ul>

      <p>
        Ordered at:{''}
        {item.updatedAt}{' '}
      </p>
      <p>
        Total price:{''}
        {item.totalPrice}
      </p>
    </li>
  ));

  return (
    <>
      <HistoryForm onSubmit={submitHistory} />
      {isLoading ? <Loader /> : <ul>{historyEntries}</ul>}
    </>
  );
};

export default HistoryPage;
