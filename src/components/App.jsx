import React, { Component } from 'react';
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
      { id: 'id-6', name: 'Mencar Bright', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const {
      formSubmitHandler,
      changeFilter,
      filteredContacts,
      deleteContacts,
    } = this;
    const visibleContact = filteredContacts();
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={formSubmitHandler} />
        <Title>Contacts</Title>
        <ContactsFilter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContact} onClick={deleteContacts} />
      </div>
    );
  }
}
