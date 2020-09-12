import {createStore, combineReducers, applyMiddleware} from 'redux';

import rootReducer from './Reducers/RootReducer';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
