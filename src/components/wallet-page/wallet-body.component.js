import React, { Component } from "react";
import WalletList from "./wallet-list.component";
import AddWallet from "./add-wallet.component";

class WalletBody extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <AddWallet />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <WalletList />
          </div>
        </div>
      </div>
    );
  }
}

export default WalletBody;
