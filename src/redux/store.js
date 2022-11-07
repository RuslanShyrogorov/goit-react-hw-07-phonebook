import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterReducer from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
