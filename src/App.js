import React, { Component } from 'react';
import './app.scss';
import UserBlocks from './Components/UserBlocks';
import UserCreate from './Components/UserCreate';

export default class App extends Component {
  id = 0;
  state = {
    users: [],
  };
  addUserListItem = (InputName, InputAge, InputMail, GenSelect) => {
    let lisItem = {
      name: InputName,
      age: InputAge,
      mail: InputMail,
      gender: GenSelect,
      id: this.id++,
    };
    console.log(lisItem, 'userInfo');
    this.setState(({ users }) => {
      const newListItem = [...users, lisItem];
      return {
        users: newListItem,
      };
    });
  };
  delUserHandle = (index) => {
    const newUsers = [...this.state.users];
    newUsers.splice(index, 1);
    this.setState({
      users: newUsers,
    });
  };
  render() {
    return (
      <div className="app">
        <UserCreate
          users={this.state.users}
          addUserListItem={this.addUserListItem}
        />
        <UserBlocks
          users={this.state.users}
          delUserHandle={this.delUserHandle}
        />
      </div>
    );
  }
}
