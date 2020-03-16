import React from "react";
import { Card } from "../card/card.component";

import "./card-list.style.scss";

export const CardList = ({ users }) => {
  const mappedUsers = users.map(user => (
    <Card user={user} key={user.id}></Card>
  ));

  return <div className="card-list">{mappedUsers}</div>;
};
