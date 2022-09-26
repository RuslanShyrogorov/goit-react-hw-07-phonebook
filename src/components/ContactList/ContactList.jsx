import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { ListContact, ItemContact } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <p>{`${name} ${number}`}</p>
          <Button
            type="submit"
            text="Delete"
            onClick={() => {
              onDeleteContact(id);
            }}
          />
        </ItemContact>
      ))}
    </ListContact>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
