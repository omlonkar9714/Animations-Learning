import {ADD_TODO, DELETE_TODO, CLEAR_ALL} from '../Actions/ToDo_Actions';

const initialState = {todoList: []};

const todoReducer = (state = initialState, action) => {
  console.log('Action' + JSON.stringify(action));
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          key: Math.random(),
          text: action.text,
        }),
      };

    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((note) => {
          return note.key !== action.key;
        }),
      };
    }

    case CLEAR_ALL: {
      return {
        ...state,
        todoList: [],
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
