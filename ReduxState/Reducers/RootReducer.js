import {combineReducers} from 'redux';
import todoReducer from './ToDo_Reducers';

export default combineReducers({todoReducer: todoReducer});
