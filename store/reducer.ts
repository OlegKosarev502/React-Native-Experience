import { combineReducers, Reducer, CombinedState } from 'redux';

import { actionTypes } from './actions';
import { IAppState, ITodo } from '../interfaces/intrefaces';

const todosInitialState: ITodo[] = [
  {
    id: 0,
    title: "Learn React-Native",
    description: "React-Native...",
  },
  {
    id: 1,
    title: "Learn Java",
    description: "Java...",
  },
  {
    id: 2,
    title: "Learn Kotlin",
    description: "Kotlin...",
  },
];

const todos = (state = todosInitialState, action: any) => {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.COMPLETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const todoDetails = (state = null, action: any) => {
  switch(action.type) {
    case actionTypes.SHOW_TODO_DETAILS:
      return {...action.payload};
    default:
      return state;
  }
};

export const rootReducer: Reducer<CombinedState<IAppState>, any> = combineReducers({
  todos,
  todoDetails,
});