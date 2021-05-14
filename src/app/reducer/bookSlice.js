import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from '../api';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: [],
    loading: false,
  },
  reducers: {
    booksRequested: (state, action) => {
      state.loading = true;
    },

    booksRequestFail: (state, action) => {
      state.loading = false;
    },

    booksReceived: (state, action) => {
      state.loading = false;
      state.bookList = action.payload;
    },
  },
});

const { booksRequested, booksReceived, booksRequestFail } = bookSlice.actions;

const url = '/books';

export const loadBooks = () => (dispatch, getState) => {
  const data = getState().data;

  dispatch(
    apiCallBegan({
      url,
      data,
      method: 'post',
      onStart: booksRequested.type,
      onSuccess: booksReceived.type,
      onError: booksRequestFail.type,
    })
  );
};
