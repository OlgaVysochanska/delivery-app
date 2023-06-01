const OrderList = () => {
  const listOfOrders = ['order 1', 'order 2', 'order 3', 'order 4'];
  return (
    <ul>
      {listOfOrders.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default OrderList;
