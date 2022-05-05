import { configureStore } from '@reduxjs/toolkit';
import filterSlice from 'redux/contacts/contacts-filter';
import { contactSlice } from 'redux/contacts/contacts-filter';
import { contactsApi } from 'redux/contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [contactSlice.name]: filterSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
