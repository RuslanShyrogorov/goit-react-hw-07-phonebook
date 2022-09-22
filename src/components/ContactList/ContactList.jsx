import React from 'react';
import Button from 'components/Button/Button';
import { ListContact, ItemContact, ContactWrapper } from './ContactList.styled';

export default function ContactList({ contacts, onClick }) {
  return (
    <ListContact>
      {contacts.map(({ id, name, number, children }) => (
        <ContactWrapper>
          <ItemContact key={id}>
            {`${name} ${number}`}
            {children}
          </ItemContact>
          <Button type="submit" text="Delete" onClick={() => onClick(id)} />
        </ContactWrapper>
      ))}
    </ListContact>
  );
}
