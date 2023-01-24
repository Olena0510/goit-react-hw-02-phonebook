import { Component } from "react";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { nanoid } from "nanoid";
import { ContactsBookList } from "./ContactsBookList/ContactsBookList";
// import PropTypes from 'prop-types';
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNameContact = ({name, number}) => {
    const { contacts } = this.state;
    
    
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    if (
      contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
    alert(`${name} is already in contacts!`);
      return;
    }
    
    if (
      contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
      return;
      }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterByName = evt => {
    this.setState({
      filter: evt.currentTarget.value
    })
  }

  getContacts = () => {
    const { filter, contacts } = this.state

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  deleteContact = (contactId) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
  }


  render() {
    const { filter } = this.state;
    const filteredContacts = this.getContacts();

    return (
      <div>
        <ContactsForm onSubmit={this.addNameContact} />
        <Filter value = {filter} onChange = {this.filterByName}/>
        <ContactsBookList contacts={filteredContacts} onDelete={this.deleteContact} />
      </div>

    )
  }
}
