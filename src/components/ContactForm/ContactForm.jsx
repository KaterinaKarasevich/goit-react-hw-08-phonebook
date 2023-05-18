
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAPI } from 'redux/contacts/operations';

import { getContacts } from 'redux/contacts/selectors';

import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button } from "./ContactForm.styled"

 export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
   
    const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const userName = e.target.elements.name.value;
     const getExistingName = (contacts, userName) => {
        return contacts.find(contact => contact.name === userName)
     };
     const existingName = getExistingName(contacts, userName);
     const contact = {
         
            name: form.elements.name.value,
            number: form.elements.number.value,
    }
      existingName ?  
      alert(`${userName} is already in contacts`) : dispatch(addContactsAPI(contact));
     
     
     form.reset();
   };
    
  return (     
        <Form onSubmit={handleSubmit}>
        
          <FormGroup>
            <FormWrap>
              <FormLabel>Name</FormLabel>

                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Name"
               />
                
            </FormWrap>
            
            <FormWrap>
              <FormLabel>Number</FormLabel>
                <FormInput
                    type="tel"
                    name="number"
                    placeholder="Number"
                                    
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Add contact</Button>
        </Form>
 
        )
    }















