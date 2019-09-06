import React, { Component } from "react";

class AddWallet extends Component {
  state = {};
  render() {
    return (
      <div class="m-2 card">
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">
                Wallet Identifier
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="e.g. Bitcoin"
            ></input>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">
                Address
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="e.g. 1CJwpZFtaLgLzUdh4mWsTKMDd3VHCugHRf"
            ></input>
          </div>
          <button className="btn btn-outline-info">Add</button>
        </div>
      </div>
    );
  }
}

export default AddWallet;
