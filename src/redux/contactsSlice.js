import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import defaultValue from 'data/defaultValue';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultValue,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
