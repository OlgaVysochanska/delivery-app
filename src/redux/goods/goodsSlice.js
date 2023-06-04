import { createSlice } from '@reduxjs/toolkit';
import { fetchGoods } from './goodsOperations';

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGoods.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchGoods.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default goodsSlice.reducer;
