export interface IAppState {
  todos: ITodo[];
  todoDetails: ITodo;
}

export interface ITodo {
  id: number;
  title: string;
  description?: string;
  date?: string;
  time?: string;
}