import { ITodo } from '../interfaces/intrefaces';

export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  SHOW_TODO_DETAILS: "SHOW_TODO_DETAILS",
};

export const addTodo = (todo: ITodo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

export const completeTodo = (todo: ITodo) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: todo,
  };
};

export const showTodoDetails = (todo: ITodo) => {
  return {
    type: actionTypes.SHOW_TODO_DETAILS,
    payload: todo,
  };
};