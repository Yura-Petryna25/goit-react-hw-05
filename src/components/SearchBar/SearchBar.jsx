import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
