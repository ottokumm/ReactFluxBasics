import {Store} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let balance = 0; //stored value

class BankBalanceStore extends Store {

    getState() { //getter for the stored value
        return balance;
    }

    //onDispatch method must be overriden
    __onDispatch(action) {
        //actions consist of type and optional data payload, in our case, it is ammount number
        switch (action.type) {
            case bankConstants.CREATED_ACCOUNT:
                {
                    balance = 0;
                    this.__emitChange(); //each time stored value changes emitChange method should be invoked
                }
                break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
                {
                    balance = balance + action.ammount;
                    this.__emitChange()
                }
                break;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
                {
                    balance = balance - action.ammount;
                    this.__emitChange()
                }
                break;

        }

    };
}

export default new BankBalanceStore(AppDispatcher); //export of instance of Store Util class, passing desired Dispathcer as an argument