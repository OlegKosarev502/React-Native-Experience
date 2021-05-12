import { connect } from "react-redux";

import { NoteList } from "./noteList";
import { setNoteToDisplay, updateFormState } from "../../store/actions";
import { IAppState } from "../../interfaces/intrefaces";

const mapStateToProps = (state: IAppState) => {
  return {
    notes: state.notes,
    formState: state.noteFormState,
  };
};

const mapDispatchToProps = {
  setNoteToDisplay,
  updateFormState,
};

export const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
