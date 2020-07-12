import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/intrefaces';
import { NoteForm } from './noteForm';
import { setNotes, removeNote, updateNote } from '../../store/actions';

const mapStateToProps = (state: IAppState) => {
    return {
        formState: state.noteFormState,
        note: state.noteToDipslay,
        notes: state.notes,
    };
};

const mapDispatchToProps = {
    setNotes,
    removeNote,
    updateNote,
};

export const NoteFormContainer = connect(
    mapStateToProps, mapDispatchToProps
)(NoteForm);
