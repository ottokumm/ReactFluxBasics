import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BankBalanceStore from './BankBalanceStore';
import BankActions from './BankActions';

class App extends Component {
  constructor() {
    super(...arguments);
    BankActions.createAccount();
    this.state = {
      balance: BankBalanceStore.getState()
    }
  }

  componentDidMount() { //addListener handles component state changes callback, and returns Dispatch token, using which we can dispose listener component will unmount
    this.storeSubscription = BankBalanceStore.addListener(() => this.handleStorageChange());
  }

  componentWillUnmount() {
    this
      .storeSubscription
      .remove();
  }

  handleStorageChange() {
    this.setState({
      balance: BankBalanceStore.getState()
    });
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

ReactDOM.render(
  <App/>, document.getElementById('root'));
