import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://delivery-4oqx.onrender.com/api',
});

export default instance;

export const getShops = async () => {
  const { data } = await instance.get('/shops');

  return data;
};

export const getGoods = async (shop = '', page = 1) => {
  const { data } = await instance.get(`/goods`, {
    params: {
      shop,
      page,
    },
  });
  return data;
};

export const addOrder = async (
  owner,
  userName,
  userPhone,
  userLocation,
  shop,
  goods,
  totalPrice
) => {
  const { data } = await instance.post(`/orders`, {
    params: {
      owner,
      userName,
      userPhone,
      userLocation,
      shop,
      goods,
      totalPrice,
    },
  });
  return data;
};

export const getOrders = async (email = '') => {
  const { data } = await instance.get(`/orders`, {
    params: {
      email,
    },
  });
  return data;
};
