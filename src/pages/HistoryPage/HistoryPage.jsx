import { useDispatch } from 'react-redux';
import HistoryForm from 'components/HistoryForm/HistoryForm';

import { fetchOrders } from 'redux/orders/ordersOperations';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const submitHistory = data => {
    dispatch(fetchOrders(data));
  };
  return (
    <>
      <HistoryForm onSubmit={submitHistory} />
    </>
  );
};

export default HistoryPage;
