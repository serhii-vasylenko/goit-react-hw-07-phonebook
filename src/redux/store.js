import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactsSlice from 'redux/contactsSlice';
import filterSlice from 'redux/filterSlice';

const enhancer = devToolsEnhancer();

const store = configureStore({
  reducer: { contacts: contactsSlice, filter: filterSlice },
}, enhancer);

export default store;