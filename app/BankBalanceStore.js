import {ReduceStore} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let balance = 0; //stored value

class BankBalanceStore extends ReduceStore {
    //getInitialState method must be defined
    getInitialState() {
        return 0;
    }
    //state is treated like immutable property
    //reduce method must be defined
    reduce(state, action) {
        //actions consist of type and optional data payload, in our case, it is ammount number
        switch (action.type) {
            case bankConstants.CREATED_ACCOUNT:
                {
                    return 0;
                    //emitChange method shouldn't be invoked
                }
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
                {
                    return  state + action.ammount;
                }

            case bankConstants.WITHDREW_FROM_ACCOUNT:
                {
                    return state - action.ammount;
                }
        }

    };
}

export default new BankBalanceStore(AppDispatcher); //export of instance of Store Util class, passing desired Dispathcer as an argument