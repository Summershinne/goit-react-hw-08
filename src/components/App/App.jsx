import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      {error && <Error>Error message</Error>}
      <ContactList />
    </div>
  )
};