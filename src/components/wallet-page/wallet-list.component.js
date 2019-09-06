import React, { Component } from "react";

const Wallet = props => (
  <tr>
    <td>{props.wallet.identifier}</td>
    <td>{props.wallet.address}</td>
  </tr>
);

class WalletList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallets: [
        {
          identifier: "etherum",
          address: "dz64pZFtaLgLzUdh4ds3hKMDd3VHCug3t7"
        },
        {
          identifier: "bitcoin",
          address: "1CJwpZFtaLgLzUdh4mWsTKMDd3VHCugHRf"
        },
        {
          identifier: "vechain",
          address: "764wpZtEaLgLzUdh4mWsTKMDd3VHCug63Z"
        }
      ]
    };
  }

  walletList() {
    return this.state.wallets.map(wallet => {
      return <Wallet wallet={wallet} key={wallet.identifier} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table alert alert-primary">
          <thead className="thead-light">
            <tr>
              <th>Identifier</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.walletList()}</tbody>
        </table>
      </div>
    );
  }
}

export default WalletList;
