import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { bookSlice } from './reducer/bookSlice';
import api from './middleware/api';
import logger from './middleware/logger';

const store = configureStore({
  reducer: bookSlice,
  middleware: [
    ...getDefaultMiddleware(),
    logger({ destination: 'logging' }),
    api,
  ],
});

export default store;
