import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts} from "../../redux/filters/selectors";
// import { selectContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
  
    return (
        <ul className={css.listContainer}>{contacts.map((contact) => (
            <li key={contact.id}>
                <Contact data={contact} />
            </li>
        ))}</ul>
    );
};