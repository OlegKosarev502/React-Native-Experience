import { connect } from 'react-redux';

import { NoteList } from './noteList';
import { showTodoDetails, updateFormState } from '../../store/actions';
import { IAppState } from '../../interfaces/intrefaces';

const mapStateToProps = (state: IAppState) => {
  return {
    notes: state.notes,
    formState: state.noteFormState,
  };
};

const mapDispatchToProps = {
  showTodoDetails,
  updateFormState,
};

export const NoteListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NoteList); 