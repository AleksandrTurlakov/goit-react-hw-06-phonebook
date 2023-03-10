import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactName,
  Button,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { updateFilter } from '../../redux/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterName = useSelector(state => state.filter);

  const getFilterContacts = () => {
    const normalizedFilter = filterName.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <ContactsList>
      {filterContacts.map(({ name, id, number }) => (
        <ContactsItem key={id}>
          <ContactName>
            {name}: {number}
          </ContactName>
          <Button
            onClick={() => {
              dispatch(deleteContact(id));
              dispatch(updateFilter(''));
            }}
          >
            Delete
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleteContact: PropTypes.func,
};
