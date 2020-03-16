import React from "react";
import "./card-search.style.scss";

export const CardSearch = props => {
  const { changeHandler } = props;
  return (
    <input
      className="search-box"
      onChange={e => changeHandler(e)}
      type="search"
      placeholder="Search robot"
    />
  );
};
