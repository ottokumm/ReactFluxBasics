import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

const CHANGE_EVENT = 'change'; //change event to emit

let __emitter = new EventEmitter();
let balance = 0; //stored value

let BankBalanceStore = {

    getState() { //getter for the stored value
        return balance;
    },

    addListener: (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback);
    }
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => { //AppDispatcher returns dispatchToken
    //actions consist of type and optional data payload, in our case, it is ammount number
    switch (action.type) {
        case bankConstants.CREATED_ACCOUNT:
            {
                balance = 0;
                __emitter.emit(CHANGE_EVENT) //each time stored value changes emit method should be emitted with change event
            }
            break;
        case bankConstants.DEPOSITED_INTO_ACCOUNT:
            {
                balance = balance + action.ammount;
                __emitter.emit(CHANGE_EVENT);
            }
            break;
        case bankConstants.WITHDREW_FROM_ACCOUNT:
            {
                balance = balance - action.ammount;
                __emitter.emit(CHANGE_EVENT);
            }
            break;

    }

});

export default BankBalanceStore;