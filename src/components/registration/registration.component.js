import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log("Error: " + err));

    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    return (
      <div className="m-2 card">
        <div className="card-header">Register</div>
        <h5 className="m-2 card-title">Sign up below!</h5>
        <div className="m-2 input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            ></input>
          </div>
        </div>
        <div className="m-2 input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            ></input>
          </div>
        </div>
        <div className="m-2 input-group mb-3">
          <div className="input-group-prepend">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            ></input>
          </div>
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary m-2">
          Register
        </button>
      </div>
    );
  }
}

export default Register;
