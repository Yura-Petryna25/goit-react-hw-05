// import ContactItem from "./ContactItem";
// import styles from "./ContactList.module.css";

// const ContactList = ({ contacts, deleteContact }) => {
//   const handleDelete = (id) => {
//     deleteContact((prev) => prev.filter((contact) => contact.id !== id));
//   };

//   return (
//     <ul className={styles.list}>
//       {contacts.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           onDelete={handleDelete}
//         />
//       ))}
//     </ul>
//   );
// };
// export default ContactList;

import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="list-none m-0 p-0">
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
