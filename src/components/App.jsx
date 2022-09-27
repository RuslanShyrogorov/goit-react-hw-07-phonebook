import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsFilter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { MainTitle, Title } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Carmen Dias', number: '227-91-26' },
      // { id: 'id-6', name: 'Mencar Bright', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicateContact)
      return window.alert(`${newContact.name} is already in contacts`);

    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(({ contacts }) => {
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  deleteContacts = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    // console.log(e.currentTarget.value);
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { changeFilter, filteredContacts, deleteContacts, addContact } = this;
    const visibleContact = filteredContacts();
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={addContact} />
        <Title>Contacts</Title>
        <ContactsFilter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={deleteContacts}
        />
      </div>
    );
  }
}
