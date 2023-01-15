import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const App = () => {
  const state = useSelector(state => state);
  console.log(state);

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

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { name, id: nanoid(), number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setFilter('');
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = getFilterContacts();
  return (
    <>
      <h1>Phonebook</h1>
      <GlobalStyle />
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={filterContacts} onDeleleteContact={deleteContact} />
    </>
  );
};
