import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Top extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this);
      this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);
      this.onLogin = this.onLogin.bind(this);
  
      this.state = {
        loginEmail: "",
        loginPassword: "",
      };
    }
  
    onChangeLoginEmail(e) {
      this.setState({
        loginEmail: e.target.value,
      });
    }
  
    onChangeLoginPassword(e) {
      this.setState({
        loginPassword: e.target.value,
      });
    }
  
    onLogin(e) {
      e.preventDefault();
      const login = {
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
      };
      fetch("http://localhost:5000/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login)
      }).then((response) => {
        console.log(response);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
      
      // console.log(login);
      // axios
      // .post("http://localhost:5000/login",login, { withCredentials: true })
      // .then((response) => {
      //   console.log(response);
      //   window.location.reload();
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  
      console.log(login);
    }
render() {

  return (
    <div class="col-md-8">
      <form class="form-group" onSubmit={this.onLogin}>
        <div class="form-row">
          <div class="col-md-3">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              class="form-control"
              value={this.state.loginEmail}
              onChange={this.onChangeLoginEmail}
              required
            ></input>
          </div>
          <div class="col-md-3">
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              class="form-control"
              value={this.state.loginPassword}
              onChange={this.onChangeLoginPassword}
              required
            ></input>
          </div>
          <div class="col-xs-1">
            <input type="submit" class="btn btn-primary" value="Login"></input>
          </div>
          <div class="col-xs-1">
            <Link to={"/register"}>
              <button type="button" class="btn btn-primary">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

}