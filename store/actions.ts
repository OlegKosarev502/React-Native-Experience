import { INote } from '../interfaces/intrefaces';

export const actionTypes = {
  ADD_NOTE: "ADD_NOTE",
  REMOVE_NOTE: "REMOVE_NOTE",
  SHOW_TODO_DETAILS: "SHOW_TODO_DETAILS",
  UPDATE_FORM_STATE: "UPDATE_FORM_STATE",
};

export const addNote = (note: INote) => {
  return {
    type: actionTypes.ADD_NOTE,
    payload: note,
  };
};

export const removeNote = (todo: INote) => {
  return {
    type: actionTypes.REMOVE_NOTE,
    payload: todo,
  };
};

export const showTodoDetails = (todo: INote) => {
  return {
    type: actionTypes.SHOW_TODO_DETAILS,
    payload: todo,
  };
};

export const updateFormState = (state: string) => {
  return {
    type: actionTypes.UPDATE_FORM_STATE,
    payload: state,
  };
};