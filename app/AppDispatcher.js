import {Dispatcher} from 'flux';
// extending Dispatcher method just for implementing logging for understanding
// of inner process. dispatch method receives action object
class AppDispatcher extends Dispatcher {
    dispatch(action = {}) {
        console.log(action);
        super.dispatch(action);
    }
}

export default new AppDispatcher;