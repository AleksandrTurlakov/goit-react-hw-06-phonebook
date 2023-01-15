// import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  // console.log(contacts);
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parcedContacts = JSON.parse(savedContacts);
  //     return parcedContacts;
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <GlobalStyle />
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? (
        <h2>You don't have saved contacts</h2>
      ) : (
        <Contacts />
      )}
    </>
  );
};
