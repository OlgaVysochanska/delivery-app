const ShopList = () => {
  const listOfShops = ['shop 1', 'shop 2', 'shop 3', 'shop 4'];
  return (
    <ul>
      {listOfShops.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default ShopList;
