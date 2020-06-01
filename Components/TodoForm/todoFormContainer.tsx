import { connect } from 'react-redux';

import { TodoForm } from './todoForm';
import { addTodo } from '../../store/actions';

const mapDispatchToProps = {
  addTodo,
};

export const TodoFormContainer = connect(
  null, mapDispatchToProps
)(TodoForm); 