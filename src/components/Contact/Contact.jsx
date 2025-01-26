import "./Concact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
