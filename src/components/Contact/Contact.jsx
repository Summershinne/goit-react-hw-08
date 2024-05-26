import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { id, name, number }}) {
    const dispatch = useDispatch();
    const handleDelete = () =>  dispatch(deleteContact(id)) ;
    return (
        <div className={css.container}>
            <div className={css.textContainer}>
                <p><FaPhoneSquareAlt />{name}</p>
                <p><ImAddressBook />{number}</p>
            </div>
            <button className={css.btn} onClick={handleDelete}>Delete</button>
    </div>
    )
};


