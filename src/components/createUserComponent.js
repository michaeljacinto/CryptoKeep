import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  // state = {  }
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

    // window.location = "/";

    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    return (
      <div>
        <br />
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <br />
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control m-2"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <input
              type="password"
              required
              className="form-control m-2"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
// module.exports = router;
