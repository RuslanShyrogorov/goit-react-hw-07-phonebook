import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'components/Button/Button';
import {
  ListContact,
  ItemContact,
  ButtonDelContact,
} from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  const contactItem = contacts.map(({ id, name, number }) => (
    <ItemContact key={id}>
      <p>{`${name}: ${number}`}</p>
      <ButtonDelContact type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonDelContact>
    </ItemContact>
  ));

  return <ListContact>{contactItem}</ListContact>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
