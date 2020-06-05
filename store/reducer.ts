import { combineReducers, Reducer, CombinedState } from 'redux';

import { actionTypes } from './actions';
import { IAppState, ITodo } from '../interfaces/intrefaces';

const todosInitialState: ITodo[] = [
  {
    id: 0,
    title: "React-Native",
    description: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
  },
  {
    id: 1,
    title: "Java",
    description: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
  },
  {
    id: 2,
    title: "Kotlin",
    description: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
  },
  {
    id: 3,
    title: "Swift",
    description: "...",
  },
  {
    id: 4,
    title: "Objective-C",
    description: "...",
  },
  {
    id: 5,
    title: "Flutter",
    description: "...",
  },
  {
    id: 6,
    title: "Angular",
    description: "...",
  },
  {
    id: 7,
    title: "Vue",
    description: "...",
  },
  {
    id: 8,
    title: "Deno",
    description: "...",
  },
  {
    id: 9,
    title: "Node.JS",
    description: "...",
  },
  {
    id: 10,
    title: "Svelte",
    description: "...",
  },
  {
    id: 11,
    title: "Angular.JS",
    description: "...",
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