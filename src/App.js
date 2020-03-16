import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { CardSearch } from "./components/card-search/card-search.component";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchBot: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res
        });
      });
  }

  changeHandler = e => {
    this.setState({
      searchBot: e.target.value
    });
  };

  render() {
    const { users, searchBot } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchBot.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#ffffff" }}>Robot lists</h1>
        <CardSearch changeHandler={this.changeHandler}></CardSearch>
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}
