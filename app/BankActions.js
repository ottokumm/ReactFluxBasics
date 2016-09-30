import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

// Actions to be exported. Each actions consists of type, wich would be
// recognised by AppDispatcher.register method, and from optional data payload
let BankActions = {
    createAccount() {
        AppDispatcher.dispatch({type: bankConstants.CREATED_ACCOUNT, ammount: 0});
    },
    depositIntoAccount(ammount) {
        AppDispatcher.dispatch({type: bankConstants.DEPOSITED_INTO_ACCOUNT, ammount: ammount})
    },
    withdrawFromAccount(ammount) {
        AppDispatcher.dispatch({type: bankConstants.WITHDREW_FROM_ACCOUNT, ammount: ammount})
    }
};

export default BankActions;