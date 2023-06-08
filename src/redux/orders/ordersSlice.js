import { createSlice } from '@reduxjs/toolkit';
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
    setGoods(state, { payload }) {
      state.orders.goods.push(payload);
      localStorage.setItem('orders', JSON.stringify(state.orders.goods));
    },
    setQuantity(state, { payload }) {
      state.orders.goods = state.orders.goods.map(item => {
        if (item._id === payload._id) {
          return (item = { ...item, quantity: payload.quantity });
        }
        return item;
      });
    },
    setTotalPrice(state, { payload }) {
      state.orders.totalPrice = payload;
    },
    removeItem(state, { payload }) {
      state.orders.goods = state.orders.goods.filter(
        item => item._id !== payload._id
      );
      localStorage.removeItem('orders');
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
        state.userOrders = payload;
      })
      .addCase(fetchOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setGoods, setQuantity, setTotalPrice, removeItem } =
  ordersSlice.actions;
export default ordersSlice.reducer;
