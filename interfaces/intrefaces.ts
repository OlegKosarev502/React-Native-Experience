import { Moment } from "moment";

export enum NoteFormStates {
  create = "create",
  edit = "edit",
}

export interface IAppState {
  notes: INote[];
  noteToDipslay: INote;
  noteFormState: NoteFormStates;
}

export interface INote {
  id: string;
  title: string;
  description?: string;
  creationDate: Moment;
}
