import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <section className="Home__input">
      <input
        type="text"
        placeholder="Enter the Album Name"
        className="Home__input"
        onChange={props.handleInput}
        onKeyPress={props.getData}
      />
    </section>
  );
};

export default Search;
