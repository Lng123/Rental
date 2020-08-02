import React, { Component } from "react";
import axios from "axios";

export default class signUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);


    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChangeFirst(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLast(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  onSignup(e) {
    e.preventDefault();

    const signUp = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(signUp);
    axios
      .post("http://localhost:5000/signup", signUp, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="row mt-5">
        <div class="col">
          <h3>Join the platform</h3>
          <form class="form-horizontal mt-3" onSubmit={this.onSignup}>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  placeholder="First Name"
                  class="form-control"
                  value={this.state.first}
                  onChange={this.onChangeFirst}
                  required
                ></input>
              </div>
              <div class="col">
                <input
                  type="text"
                  name="lastname"
                  id=""
                  placeholder="Last Name"
                  class="form-control"
                  value={this.state.last}
                  onChange={this.onChangeLast}
                  required
                ></input>
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                class="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                required
              ></input>
            </div>
            <div class="form-group mt-3">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                class="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                required
              ></input>
            </div>
            <div class="form-group mt-3">
              <input
                type="password"
                name="confirmpassword"
                id=""
                placeholder="Confirm Password"
                class="form-control"
                value={this.state.confirmPassword}
                onChange={this.onChangeConfirmPassword}
                required
              ></input>
            </div>
            <div class="form-group mt-3">
              <input
                type="submit"
                class="btn btn-primary btn-block"
                value="Signup"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
