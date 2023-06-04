import { createSlice } from '@reduxjs/toolkit';

import { fetchShops } from './shopsOperations';

const shopsSlice = createSlice({
  name: 'shops',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShops.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShops.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchShops.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default shopsSlice.reducer;
