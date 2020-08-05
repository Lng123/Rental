import React, { Component } from "react";
import Logout from './logoutbtn.component';
import Login from './loginbtn.component';
import axios from "axios";


export default class Top extends Component {
  constructor(props) {
    super(props);

    // this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this);
    // this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);
    // this.onLogin = this.onLogin.bind(this);

    // this.state = {
    //   loginEmail: "",
    //   loginPassword: "",
    // };
  }

  // onChangeLoginEmail(e) {
  //   this.setState({
  //     loginEmail: e.target.value,
  //   });
  // }

  // onChangeLoginPassword(e) {
  //   this.setState({
  //     loginPassword: e.target.value,
  //   });
  // }

  // onLogin(e) {
  //   e.preventDefault();
  //   const login = {
  //     loginEmail: this.state.loginEmail,
  //     loginPassword: this.state.loginPassword
  //   };
  //   fetch("http://localhost:5000/login", {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(login)
  //   }).then((response) => {
  //     console.log(response);
  //     // window.location.reload();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
    
  //   // console.log(login);
  //   // axios
  //   // .post("http://localhost:5000/login",login, { withCredentials: true })
  //   // .then((response) => {
  //   //   console.log(response);
  //   //   window.location.reload();
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });

  //   console.log(login);
  // }

  render() {
    var log;
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      log = <Logout/>
    } else {
      log = <Login/>
    }
    return (
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-4">
            <h1>Rental Forum</h1>
          </div>
          {log}
        </div>
      </div>
    );
  }
}
