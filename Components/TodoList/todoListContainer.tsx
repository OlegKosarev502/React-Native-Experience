import { connect } from 'react-redux';

import { TodoList } from './todoList';
import { showTodoDetails } from '../../store/actions';
import { IAppState } from '../../interfaces/intrefaces';

const mapStateToProps = (state: IAppState) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  showTodoDetails,
};

export const TodoListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TodoList); 