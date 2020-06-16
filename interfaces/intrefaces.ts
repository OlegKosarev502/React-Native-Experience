import { Moment } from "moment";

export enum NoteFormStates {
  create = "create",
  edit = "edit",
}

export interface IAppState {
  notes: INote[];
  todoDetails: INote;
  noteFormState: NoteFormStates;
}

export interface INote {
  id: number;
  title: string;
  description?: string;
  creationDate: Moment;
}