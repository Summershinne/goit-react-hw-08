import { Form, Formik, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(response => {
                console.log(response);
                toast.success("Success!")
            })
            .catch(error => { console.log(error) });
        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            email: "",
            password:"",
        }} onSubmit={handleSubmit}
        >
            <Form className={css.form} autoComplete="off">
                <label className={css.label}>Email
                    <Field type="email" name="email" />
                </label>
                <label className={css.label}>Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
    </Formik>
)}