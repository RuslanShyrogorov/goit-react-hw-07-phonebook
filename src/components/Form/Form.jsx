import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Box } from 'components/Box';
import { FormLabel, FormInput } from './Form.styled';
import Button from 'components/Button/Button';

import React from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    resetState();
  };

  return (
    <Box
      border="normal"
      p={3}
      mb={5}
      mt={3}
      display="flex"
      flexDirection="column"
      as="form"
      onSubmit={handleSubmit}
    >
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        value={name}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <FormLabel htmlFor="tel">Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        value={number}
        id="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <Button type="submit" text="Add contact" />
    </Box>
  );
}
