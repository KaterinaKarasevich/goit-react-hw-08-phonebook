
import { useDispatch, useSelector } from "react-redux";
import { getError, getisLoading } from "redux/contacts/selectors";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList"
import { Filter} from "components/Filter/Filter"
import {Title, TitleContacts} from "pages/ContactsPage/ContactsPage.styled"
import { useEffect } from "react";
import { getContactsAPI } from "redux/contacts/operations";
import Loader from "components/Loader";


  const ContactsPage = () => {
  
  const isLoading = useSelector(getisLoading)
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAPI());
  }, [dispatch]);

   return (
      <>
        <Title>Phonebook</Title>
        <ContactForm />
       
        {isLoading && !error && <Loader />}
        {error && !isLoading && (<p>Something went wrong</p>)}
     
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
          
        <ContactList />
         
      </>
    );
}
export default ContactsPage;    


 