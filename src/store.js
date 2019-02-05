import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))

//middleware: ReduxDevlTools, reduxThunk

export default store;
