import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімальна кількість символів - 3")
      .max(50, "Максимальна кількість символів - 50")
      .required("Поля повинні бути обов'язковими для заповнення"),
    number: Yup.string()
      .min(5, "Мінімум 5 цифр")
      .required("Поля повинні бути обов'язковими для заповнення"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact((prev) => [...prev, newContact]);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            Number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="p" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
