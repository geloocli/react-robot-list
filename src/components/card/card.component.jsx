import React from "react";
import "./card.style.scss";
export const Card = ({ user }) => {
  const { name, email, id } = user;

  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set3`} alt={name} />
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
};
