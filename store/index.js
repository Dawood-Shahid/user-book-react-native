import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-most';
import rootReducer from './reducer';
import rootEpic from './epicsActions/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

export default store;
