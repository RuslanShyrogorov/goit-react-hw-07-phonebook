import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {
  useGetContactsQuery,
  // useDeleteContactMutation,
} from 'redux/contactsApi';

import { Spinner } from 'components/Spinner/Spinner';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import { ListContact } from './ContactList.styled';

export default function ContactList() {
  const filter = useSelector(getFilter);

  const { data = [], isLoading } = useGetContactsQuery();

  if (isLoading) {
    return <Spinner />;
  }

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

  const contactItem = visibleContact.map(contact => (
    <ContactListItem {...contact} />
  ));

  return (
    <ListContact>
      {/* {isLoading && <p>Loading ...</p>} */}
      {contactItem}
    </ListContact>
  );
}
