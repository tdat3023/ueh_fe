import { createSlice } from '@reduxjs/toolkit';
import { IMembersSlide } from './interfaces';
import { getListMembers } from './membersAction';

const initialState: IMembersSlide = {
  error: '',
  isLoading: false,
  listMembers: {
    count: 0,
    items: [],
  },
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetArticlesData: (state) => {
      state.listMembers = {
        count: 0,
        items: [],
      };
    },
  },
  extraReducers: (builder) => {
    //**** list messages ***//
    builder.addCase(getListMembers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListMembers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listMembers = action.payload;
    });
    builder.addCase(getListMembers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // //**** Add question ***//
    // builder.addCase(creatBook.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(creatBook.fulfilled, (state) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(creatBook.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export const { resetArticlesData } = booksSlice.actions;
export default booksSlice.reducer;
