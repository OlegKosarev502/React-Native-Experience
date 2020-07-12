import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/intrefaces';
import { addNotes, setNoteToDisplay, updateFormState } from '../../store/actions';
import { NoteList } from './noteList';

const mapStateToProps = (state: IAppState) => {
    return {
        notes: state.notes,
        formState: state.noteFormState,
    };
};

const mapDispatchToProps = {
    addNotes,
    setNoteToDisplay,
    updateFormState,
};

export const NoteListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(NoteList);
