import { CombinedState, combineReducers, Reducer } from 'redux';

import { IAppState, INote } from '../interfaces/intrefaces';
import { actionTypes } from './actions';

const notes = (state: INote[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.SET_NOTES:
            return [...action.payload];
        case actionTypes.REMOVE_NOTE:
            return state.filter(
                note => note.id !== action.payload
            );
        case actionTypes.UPDATE_NOTE:
            return state.map(
                note => note.id === action.payload.id ? action.payload : note
            );
        default:
            return state;
    }
};

const noteToDipslay = (state = null, action: any) => {
    switch (action.type) {
        case actionTypes.SET_NOTE_TO_DISPLAY:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};

const noteFormState = (state = null, action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_FORM_STATE:
            return action.payload;
        default:
            return state;
    }
};

export const rootReducer: Reducer<CombinedState<IAppState>, any> = combineReducers({
    notes,
    noteToDipslay,
    noteFormState,
});