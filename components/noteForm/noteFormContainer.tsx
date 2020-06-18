import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/intrefaces';
import { NoteForm } from './noteForm';
import { addNote, removeNote, updateNote } from '../../store/actions';

const mapStateToProps = (state: IAppState) => {
  return {
    formState: state.noteFormState,
    note: state.noteToDipslay,
  };
};

const mapDispatchToProps = {
  addNote,
  removeNote,
  updateNote,
};

export const NoteFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NoteForm); 