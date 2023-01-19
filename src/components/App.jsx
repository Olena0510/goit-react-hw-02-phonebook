import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactsForm } from "./ContactsForm/ContactsForm";


export class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: ''
  }

  addNameContact = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
  }))
  }

}

render() {
  return (
    <div>
      <ContactsForm></ContactsForm>
    </div>

  )
}

