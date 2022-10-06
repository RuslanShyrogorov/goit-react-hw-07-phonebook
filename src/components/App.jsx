import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import Form from './Form/Form';
import ContactsFilter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { MainTitle, Title } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicateContact)
      return window.alert(`${newContact.name} is already in contacts`);

    const contact = {
      id: nanoid(),
      ...newContact,
    };

    setContacts(prev => [contact, ...prev]);
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    console.log(contactId);
  };

  const visibleContact = filteredContacts();

  return (
    <Box
      width="30%"
      mt={3}
      mb={3}
      ml={6}
      p={4}
      bg="white"
      borderRadius="normal"
      boxShadow="card"
    >
      <MainTitle>Phonebook</MainTitle>
      <Form onSubmit={addContact} />
      <Title>Contacts</Title>
      <ContactsFilter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContact} onDeleteContact={deleteContacts} />
    </Box>
  );
}
