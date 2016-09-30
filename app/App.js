import React, {Component} from 'react';
import {Container} from 'flux/utils';
import ReactDOM from 'react-dom';
import BankBalanceStore from './BankBalanceStore';
import BankRewardsStore from './BankRewardsStore';
import BankActions from './BankActions';

class App extends Component {
  constructor() {
    super(...arguments);
    BankActions.createAccount();
  }

  static getStores() {
    return [BankBalanceStore];
  }

  static calculateState(prevState) {
    return {
      balance: BankBalanceStore.getState(),
      rewardsTier: BankRewardsStore.getState()
    }
  }

  deposit() { //button action deposit
    BankActions.depositIntoAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  withdraw() { //button action withdraw
    BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  render() {
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Your Points Rewards Tier is {this.state.rewardsTier}</h2>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="ammount"/>
          <br/>
          <button onClick={this
            .withdraw
            .bind(this)}>Withdraw</button>
          <button onClick={this
            .deposit
            .bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}

const AppContainer = Container.create(App);

ReactDOM.render(
  <AppContainer/>, document.getElementById('root'));
