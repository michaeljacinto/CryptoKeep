import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="m-2 card">
        <div className="card-header">Login</div>
        <h5 className="m-2 card-title">Login to Crypto Keep</h5>
        <div className="m-2 input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            ></input>
          </div>
        </div>
        <div className="m-2 input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <button className="btn btn-primary m-2 ">Login</button>
      </div>
    );
  }
}

export default Login;
