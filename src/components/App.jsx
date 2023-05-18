import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { FormAddContacts } from "./FormAddContacts";
import { RenderContactList } from './RenderContactList';
import { FilterContacts } from './FilterContacts';
import { Div,Title,ContactsTitle } from './App.styled';
export class  App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contact);
    if (parseContacts) {
      this.setState({contacts: parseContacts});
    }
}

  componentDidUpdate(prevState, prevProps) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
}
// add contacts on contacts:[]
  onFormData = (value) => {
    console.log(value);
    const checkExistContact = this.state.contacts.find(contact => contact.name.toLowerCase() === (value.name));
    if (!checkExistContact) {
     this.setState(prevState => {
      return {
        contacts: [{ ...value, id: nanoid() }, ...prevState.contacts],
        
      };
    });
    } else {
      alert(`${value.name} is already in contacts`);
   }
    
  };
//push contact with filter list
  onchangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value.toLowerCase() });
   
  };

      
  



//delete contact with
  deleteContact = remove => {
 //remove contact
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== remove)
    }));
}
  render() {
    const { filter, contacts } = this.state;
     const FilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
   
    return (
    <Div>
      <Title>Phonebook</Title>
        <FormAddContacts onFormData={this.onFormData} />
        
        <ContactsTitle>Contacts</ContactsTitle>

        <FilterContacts
          filter={filter}
          onChange={this.onchangeFilter}
        /> 

        <RenderContactList
          contactList={FilteredContacts}
          onDeleteContact={this.deleteContact}
        />
    </Div>
  );
   };
  
};
