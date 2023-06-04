import { useDispatch, useSelector } from 'react-redux';
import HistoryForm from 'components/HistoryForm/HistoryForm';

import { fetchOrders } from 'redux/orders/ordersOperations';
import { userOrders } from 'redux/orders/ordersSelectors';
import { useEffect } from 'react';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const submitHistory = data => {
    dispatch(fetchOrders(data));
  };

  const history = useSelector(userOrders);

  useEffect(() => {
    console.log(history);
  }, [history]);

  console.log(history);
  return (
    <>
      <HistoryForm onSubmit={submitHistory} />
    </>
  );
};

export default HistoryPage;
