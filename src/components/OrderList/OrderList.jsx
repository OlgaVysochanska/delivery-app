import { useSelector, useDispatch } from 'react-redux';

import { orderedGoods } from 'redux/orders/ordersSelectors';
import { setQuantity } from 'redux/orders/ordersSlice';

const OrderList = () => {
  const { goods } = useSelector(orderedGoods);
  console.log(goods);
  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    dispatch(setQuantity({ quantity: Number(e.target.value), _id: data }));
  };

  const listOfOrders = goods.map(item => (
    <li key={item._id}>
      <div>
        <img src={item.url} alt="Food" width="300" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <label>
          Quantity: {item.quantity}
          <input
            type="number"
            name="quantity"
            min="1"
            max="50"
            value={item.quantity}
            step="1"
            onChange={e => handleChange(e, item._id)}
          />
          <p>
            {`Price for ${item.quantity} products:{' '}
            ${Number(item.price) * Number(item.quantity)}`}
          </p>
        </label>
      </div>
    </li>
  ));
  return <ul>{listOfOrders}</ul>;
};

export default OrderList;
