 import { useState } from "react";
import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import {ToastContainer, toast} from 'react-toastify';
import { nanoid } from 'nanoid';
import { Div, Title, ContactsTitle } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // add contacts on contacts:[]
const onFormData = (value) => {

  const checkExistContact = contacts.find(contact => contact.name.toLowerCase() === (value.name));
  if (!checkExistContact) {
    setContacts(prevState => [{ ...value, id: nanoid() }, ...prevState]);
       } else {
     toast.error(`"${value.name.toUpperCase()} "is already in contacts`, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });   
    }
    
  };
 
//push contact with filter list
const  onChangeFilter = evt => {
   setFilter(evt.currentTarget.value.toLowerCase());
   };

   //delete contact with
const  deleteContact = remove => {
  setContacts(prevState => prevState.filter(contact =>  contact.id !== remove));
 }

  return (
     <Div>
      <Title> Phonebook</Title>
      <FormAddContacts onFormData={onFormData} />
        
      <ContactsTitle>Contacts</ContactsTitle>

     {contacts.length !== 0 &&  <FilterContacts
        filter={filter}
        onChange={onChangeFilter}
      />}
      

      <RenderContactList
        contactList={contacts.filter(contact => contact.name.toLowerCase().includes(filter))}
          onDeleteContact={deleteContact}
       />  
      <ToastContainer/>
     </Div>


  );
}









// import React, { Component } from "react";
// import { nanoid } from 'nanoid';
// import { FormAddContacts } from "./FormAddContacts";
// import { RenderContactList } from './RenderContactList';
// import { FilterContacts } from './FilterContacts';
// import { Div,Title,ContactsTitle } from './App.styled';
// export class  App extends Component {

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contact = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contact);
//     if (parseContacts) {
//       this.setState({contacts: parseContacts});
//     }
// }



//   componentDidUpdate(prevState, prevProps) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
// }



// // add contacts on contacts:[]
//   onFormData = (value) => {
//     console.log(value);
//     const checkExistContact = this.state.contacts.find(contact => contact.name.toLowerCase() === (value.name));
//     if (!checkExistContact) {
//      this.setState(prevState => {
//       return {
//         contacts: [{ ...value, id: nanoid() }, ...prevState.contacts],
        
//       };
//     });
//     } else {
//       alert(`${value.name} is already in contacts`);
//    }
    
//   };
// //push contact with filter list
//   onchangeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value.toLowerCase() });
   
//   };

// //delete contact with
//   deleteContact = remove => {
//  //remove contact
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== remove)
//     }));
// }
//   render() {
//     const { filter, contacts } = this.state;
//      const FilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
   
//     return (
//     <Div>
//       <Title>Phonebook</Title>
//         <FormAddContacts onFormData={this.onFormData} />
        
//         <ContactsTitle>Contacts</ContactsTitle>

//         <FilterContacts
//           filter={filter}
//           onChange={this.onchangeFilter}
//         /> 

//         <RenderContactList
//           contactList={FilteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//     </Div>
//   );
//    };
  
// };
