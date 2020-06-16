import { Moment } from "moment";

export interface IAppState {
  todos: ITodo[];
  todoDetails: ITodo;
}

export interface ITodo {
  id: number;
  title: string;
  description?: string;
  creationDate: Moment;
}