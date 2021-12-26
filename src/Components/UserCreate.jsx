import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import './userCreate.scss';
import BasicSelect from './BasicSelect';
import Button from '@mui/material/Button';

export default class UserCreate extends Component {
  state = {
    name: '',
    age: '',
    mail: '',
    password: '',
    gender: '',
  };

  addNewUserList = (e) => {
    e.preventDefault();
    if (
      this.state.name !== '' &&
      this.state.age !== '' &&
      this.state.mail !== '' &&
      this.state.password !== '' &&
      this.state.gender !== ''
    ) {
      this.props.addUserListItem(
        this.state.name,
        this.state.age,
        this.state.mail,
        this.state.gender
      );
      this.setState({
        name: '',
        age: '',
        mail: '',
        password: '',
      });
    } else {
      alert('Please fill all required inputs!');
    }
  };
  userNameCreateHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  userAgeCreateHandler = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  userMailCreateHandler = (e) => {
    this.setState({
      mail: e.target.value,
    });
  };
  userPassCreateHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  genderSelectHandler = (e) => {
    this.setState({
      gender: e,
    });
  };
  render() {
    return (
      <form className="user-create-form">
        <TextField
          required
          id="standard-required"
          label="Name"
          variant="standard"
          autoComplete="current-name"
          className="name-input"
          onChange={this.userNameCreateHandler}
          value={this.state.name}
        />
        <TextField
          required
          id="age-required"
          label="Age"
          variant="standard"
          type={'number'}
          className="age-input"
          onChange={this.userAgeCreateHandler}
          value={this.state.age}
        />
        <TextField
          required
          id="mail-required"
          label="Email"
          variant="standard"
          className="email-input"
          autoComplete="current-email"
          onChange={this.userMailCreateHandler}
          value={this.state.mail}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          className="password-input"
          value={this.state.password}
          onChange={this.userPassCreateHandler}
        />
        <BasicSelect genderSelectHandler={this.genderSelectHandler} />
        <Button
          variant="contained"
          color="success"
          className="add-user-btn"
          onClick={this.addNewUserList}
        >
          Add User
        </Button>
      </form>
    );
  }
}
