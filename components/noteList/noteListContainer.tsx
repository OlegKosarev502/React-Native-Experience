import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/intrefaces';
import { setNotes, setNoteToDisplay, updateFormState } from '../../store/actions';
import NoteList from './noteList';

const mapStateToProps = (state: IAppState) => {
    return {
        notes: state.notes,
        formState: state.noteFormState,
    };
};

const mapDispatchToProps = {
    setNotes,
    setNoteToDisplay,
    updateFormState,
};

const NoteListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(NoteList);

export default NoteListContainer;
