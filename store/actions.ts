import { INote, NoteFormStates } from '../interfaces/intrefaces';

export const actionTypes = {
    SET_NOTES: "SET_NOTES",
    REMOVE_NOTE: "REMOVE_NOTE",
    UPDATE_NOTE: "UPDATE_NOTE",
    SET_NOTE_TO_DISPLAY: "SET_NOTE_TO_DISPLAY",
    UPDATE_FORM_STATE: "UPDATE_FORM_STATE",
};

export const setNotes = (notes: INote[] | []) => {
    return {
        type: actionTypes.SET_NOTES,
        payload: notes,
    };
};

export const removeNote = (noteId: string) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        payload: noteId,
    };
};

export const updateNote = (note: INote) => {
    return {
        type: actionTypes.UPDATE_NOTE,
        payload: note,
    };
};

export const setNoteToDisplay = (note: INote) => {
    return {
        type: actionTypes.SET_NOTE_TO_DISPLAY,
        payload: note,
    };
};

export const updateFormState = (state: NoteFormStates) => {
    return {
        type: actionTypes.UPDATE_FORM_STATE,
        payload: state,
    };
};