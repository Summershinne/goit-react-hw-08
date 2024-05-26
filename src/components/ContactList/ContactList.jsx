import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
    const contacts = useSelector(selectVisibleContacts);
  
    return (
        <ul className={css.listContainer}>{contacts.map((contact) => (
            <li key={contact.id}>
                <Contact data={contact} />
            </li>
        ))}</ul>
    
    );
};