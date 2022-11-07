import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

import {
  ListContact,
  ItemContact,
  ButtonDelContact,
} from './ContactList.styled';

export default function ContactList() {
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);

  const { data = [], isLoading } = useGetContactsQuery();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const onDeleteContact = async id => {
    await deleteContact(id);
  };
  const filteredContacts = () => {
    if (!filter) {
      return data;
    }

    const normalizeFilter = filter.toLowerCase();

    return data?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = filteredContacts();

  const contactItem = visibleContact.map(({ id, name, number }) => (
    <ItemContact key={id}>
      <p>{`${name}: ${number}`}</p>
      <ButtonDelContact type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonDelContact>
    </ItemContact>
  ));

  return <ListContact>{contactItem}</ListContact>;
}
