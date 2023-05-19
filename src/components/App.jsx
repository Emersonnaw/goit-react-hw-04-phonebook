import { useState,useEffect  } from "react";
import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import {ToastContainer, toast} from 'react-toastify';
import { nanoid } from 'nanoid';
import { Div, Title, ContactsTitle } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
  window.localStorage.setItem('contacts',JSON.stringify(contacts))
},[contacts])

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
