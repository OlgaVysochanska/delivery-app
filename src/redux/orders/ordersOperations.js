import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'shared/services/API';

export const createOrder = createAsyncThunk(
  'order/addOrder',
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.addOrder(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const { data: result } = await API.getOrders(data);
      console.log(result, 'get');
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
