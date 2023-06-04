import { createSlice, current } from '@reduxjs/toolkit';
import { createOrder, fetchOrders } from './ordersOperations';

const initialState = {
  orders: {
    shop: '',
    goods: [],
  },
  userOrders: [],
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setShop(state, { payload }) {
      state.orders.shop = payload;
      localStorage.setItem('shopName', payload);
    },
    setGoods(state, { payload }) {
      state.orders.goods.push(payload);
      localStorage.setItem('orders', JSON.stringify(state.orders.goods));
    },
    setQuantity(state, { payload: { quantity, _id } }) {
      // const changed = state.orders.goods.find(it => it._id === payload._id);
      // const changedIdx = state.orders.goods.findIndex(
      //   it => it._id === payload._id
      // );
      // state.orders.goods[changedIdx] = {
      //   ...changed,
      //   quantity: payload.quantity,
      // };
      console.log(quantity, _id);
      console.log(current(state.orders.goods));
      state.orders.goods = state.orders.goods.map(item =>
        item._id === _id ? { ...item, quantity } : item
      );
    },
    setTotalPrice(state, { payload }) {
      state.orders.totalPrice = payload;
    },
    removeItem(state, { payload }) {
      state.orders.goods = state.orders.goods.filter(
        item => item._id !== payload._id
      );
      localStorage.setItem('orders', JSON.stringify(state.orders.goods));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createOrder.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        alert('The order was created successfully!');
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchOrders.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.orders.userOrders = payload;
      })
      .addCase(fetchOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setShop, setGoods, setQuantity, setTotalPrice, removeItem } =
  ordersSlice.actions;
export default ordersSlice.reducer;
