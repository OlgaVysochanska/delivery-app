const GoodsList = () => {
  const listOfGoods = ['good 1', 'good 2', 'good 3', 'good 4'];
  return (
    <ul>
      {listOfGoods.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default GoodsList;
