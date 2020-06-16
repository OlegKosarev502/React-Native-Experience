import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/intrefaces';
import { TodoForm } from './todoForm';
import { addNote, removeNote } from '../../store/actions';

const mapStateToProps = (state: IAppState) => {
  return {
    formState: state.noteFormState,
    note: state.todoDetails,
  };
};

const mapDispatchToProps = {
  addNote,
  removeNote,
};

export const TodoFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TodoForm); 