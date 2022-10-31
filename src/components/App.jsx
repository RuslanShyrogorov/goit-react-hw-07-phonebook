import { Box } from './Box';
import Form from './Form/Form';
import ContactsFilter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { MainTitle, Title } from './App.styled';

export default function App() {
  return (
    <Box
      width="30%"
      mt={3}
      mb={3}
      ml="auto"
      mr="auto"
      p={4}
      bg="white"
      borderRadius="normal"
      boxShadow="card"
    >
      <MainTitle>Phonebook</MainTitle>
      <Form />
      <Title>Contacts</Title>
      <ContactsFilter />
      <ContactList />
    </Box>
  );
}
