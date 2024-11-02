import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '@/core/api';
import { setErrorMessage } from '../app/appSlice';

export const getListMembers = createAsyncThunk('/users', async (_, { rejectWithValue }) => {
  const response: any = await apiClient.get('users', {
    headers: {},
  });
  if (response?.isError) {
    return rejectWithValue(response.message);
  }
  return response;
});

export const creatMember = createAsyncThunk('/users', async (payload: any, { rejectWithValue, dispatch }) => {
  const response: any = await apiClient.post('users', payload, {
    headers: {},
  });
  if (response?.isError) {
    dispatch(setErrorMessage({ message: response.data.error }));
    return rejectWithValue(response.message);
  }
  return response;
});

// export const updateBook = createAsyncThunk('/books', async (payload: IBook, { rejectWithValue, dispatch }) => {
//   const response: any = await apiClient.put(`books/${payload._id}`, payload, {
//     headers: {},
//   });
//   if (response?.isError) {
//     dispatch(setErrorMessage({ message: response.data.error }));
//     return rejectWithValue(response.message);
//   }
//   return response;
// });
