import { useDeleteContactMutation } from 'redux/contactsApi';

import { Spinner } from 'components/Spinner/Spinner';

import { ContactItem, ButtonDeleteContact } from './ContactListItem.styled';

export default function ContactListItem({ name, number, id }) {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();

  const onDeleteContact = async id => {
    await deleteContact(id);
  };

  return (
    <ContactItem key={id}>
      <p>{`${name}: ${number}`}</p>
      <ButtonDeleteContact type="button" onClick={() => onDeleteContact(id)}>
        {isDeliting ? <Spinner /> : 'Delete'}
      </ButtonDeleteContact>
    </ContactItem>
  );
}
