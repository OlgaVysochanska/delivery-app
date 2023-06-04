import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../shared/services/API';

export const fetchGoods = createAsyncThunk(
  'goods/fetch',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await API.getGoods(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
