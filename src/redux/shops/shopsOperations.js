import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../shared/services/API';

export const fetchShops = createAsyncThunk(
  'shops/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { result } = await API.getShops();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
