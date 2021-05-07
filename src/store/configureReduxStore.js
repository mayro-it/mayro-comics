import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const history = createBrowserHistory({
    basename: '',
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let array_middleware = [thunk];
const getCompose = () => {
    if (process.env.NODE_ENV !== 'production') {
        return composeEnhancers(applyMiddleware(...array_middleware));
    } else {
        return applyMiddleware(...array_middleware);
    }
}
const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    getCompose(),
);
window.ReduxDispatch = store.dispatch;
export default store;