import css from "./ContactForm.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup"
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
})

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, action) => {
        const newContact = {
        name: values.name,
        number: values.number
     }   
        dispatch(addContact(newContact));
        action.resetForm();
    }
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    return (
        <Formik initialValues={{ name:"", number:""}} onSubmit={ handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.formContainer}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type='text' name='name' id={nameFieldId} />
                <ErrorMessage name="name" component="span" />
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} />
                <ErrorMessage name="number" component="span" />
            <button className={css.btn} type='submit'>Add contact</button>
            </Form>
        </Formik> 
    )}