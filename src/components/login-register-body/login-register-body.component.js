import React, { Component } from "react";
import Login from "../login/login.component";
import Register from "../registration/registration.component";

class LoginRegisterBody extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Login />
          </div>
          <div className="col-sm">
            <Register />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegisterBody;
