import { Component } from 'react';
import nextId from 'react-id-generator';

// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  deleteContacts = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`This ${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { id: nextId(), name: name, number: number },
        ],
      }));
    }
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
}
