import moment from 'moment';
import { CombinedState, combineReducers, Reducer } from 'redux';

import { IAppState, INote } from '../interfaces/intrefaces';
import { actionTypes } from './actions';

const notesInitialState: INote[] = [
    {
        id: "0",
        title: "React-Native",
        description: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
        creationDate: moment('2020-05-29'),
    },
    {
        id: "1",
        title: "Java",
        description: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
        creationDate: moment('2020-05-30'),
    },
    {
        id: "2",
        title: "Kotlin",
        description: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
        creationDate: moment('2020-05-30'),
    },
    {
        id: "3",
        title: "Swift",
        description: "...",
        creationDate: moment('2020-06-01'),
    },
    {
        id: "4",
        title: "Objective-C",
        description: "...",
        creationDate: moment('2020-06-01'),
    },
    {
        id: "5",
        title: "Flutter",
        description: "...",
        creationDate: moment('2020-06-02'),
    },
    {
        id: "6",
        title: "Angular",
        description: "...",
        creationDate: moment('2019-04-02'),
    },
    {
        id: "7",
        title: "Vue",
        description: "...",
        creationDate: moment('2019-10-15'),
    },
    {
        id: "8",
        title: "Deno",
        description: "...",
        creationDate: moment('2020-05-20'),
    },
    {
        id: "9",
        title: "Node.JS",
        description: "...",
        creationDate: moment('2019-12-21'),
    },
    {
        id: "10",
        title: "Svelte",
        description: "...",
        creationDate: moment('2019-11-10'),
    },
    {
        id: "11",
        title: "Angular.JS",
        description: "...",
        creationDate: moment('2020-02-20'),
    },
];

const notes = (state = notesInitialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return [...state, action.payload];
        case actionTypes.ADD_NOTES:
            return [...state, action.payload];
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