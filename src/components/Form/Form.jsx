import { useState } from 'react';

import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';

import { Box } from 'components/Box';
import { FormLabel, FormInput, Btn } from './Form.styled';
// import Button from 'components/Button/Button';

import React from 'react';
import { Spinner } from 'components/Spinner/Spinner';

export default function Form() {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setNewName(e.target.value);
        break;
      case 'number':
        setNewNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetState = () => {
    setNewName('');
    setNewNumber('');
  };

  const onCheckRepeatContact = value => {
    const result = data.find(contact => contact.name === value);
    return result;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (onCheckRepeatContact(newName)) {
      resetState();
      return alert(`${newName} is already in contacts `);
    }
    if (newName.trim().length && newNumber.trim().length) {
      await addContact({ name: newName, number: newNumber });
    }

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
        value={newName}
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
        value={newNumber}
        id="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <Btn type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : 'Add contact'}
        {/* {isLoading ? <Spinner size={2} /> : 'Add contact'} */}
      </Btn>
    </Box>
  );
}
