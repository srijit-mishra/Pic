import { motion } from "framer-motion";
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(query);
  };

  return (
    <motion.div
      initial={{ width: "250px", opacity: 0 }}
      animate={{ width: isFocused ? "300px" : "250px", opacity: 1 }}
      exit={{ opacity: 0 }}
      className="search-container"
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="search-input"
        />
      </form>
    </motion.div>
  );
}

export default SearchBar;
