import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


export class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    };
    
    handleInputChange = event => {
        const {name, value} = event.currentTarget
    this.setState(
      {
        id: nanoid(),
        [name]: value,
      })
  }

handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
};

resetForm = () => {
    this.setState({
        name: '',
        number: ''
    });
}

    render() {
        const {name, number} = this.state
        
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor = {this.InputName}>Name</label>
                    <input
                        id={this.InputName}
                        value={this.state.name}
                        onChange = {this.handleInputChange}
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                    />  
                    
                    <label htmlFor = {this.InputNumber}>Number</label>
                    <input
                        id={this.InputNumber}
                        value={this.state.number}
                        onChange = {this.handleInputChange}
                   type="tel"
                   name="number"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
/>  
                   <button type="submit">Add contact</button>
                </form>
            </div>
        )
    }

}

ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}