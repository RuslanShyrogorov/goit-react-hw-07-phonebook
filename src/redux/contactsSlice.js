import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: {
    contacts: contactsInitialState,
    // contacts: [],
    filter: '',
  },
  // Объект редюсеров
  reducers: {
    addContact: {
      reducer(state, action) {
        const duplicateContact = state.contacts.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );

        if (duplicateContact)
          return window.alert(`${action.payload.name} is already in contacts`);

        state.contacts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// Редюсер слайса
// export const contactsReducer = contactsSlice.reducer;
