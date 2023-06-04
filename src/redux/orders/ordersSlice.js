import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from './ordersOperations';

const initialState = {
  orders: {
    shop: '',
    goods: [],
  },
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
      localStorage.setItem('goods', JSON.stringify(state.orders.goods));
    },
    setQuantity(state, { payload }) {
      state.orders.products = state.orders.products.map(item =>
        item._id === payload._id
          ? { ...item, quantity: payload.quantity }
          : item
      );
    },
    setTotalPrice(state, { payload }) {
      state.orders.totalPrice = payload;
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
      });
  },
});

export const { setShop, setGoods, setQuantity, setTotalPrice } =
  ordersSlice.actions;
export default ordersSlice.reducer;
