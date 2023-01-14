import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactName,
  Button,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDeleleteContact }) => (
  <ContactsList>
    {contacts.map(({ name, id, number }) => (
      <ContactsItem key={id}>
        <ContactName>
          {name}: {number}
        </ContactName>
        <Button onClick={() => onDeleleteContact(id)}>Delete</Button>
      </ContactsItem>
    ))}
  </ContactsList>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleleteContact: PropTypes.func.isRequired,
};
