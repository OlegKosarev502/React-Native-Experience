import { connect } from 'react-redux';

import { TodoDetails } from './todoDetails';
import { removeNote } from '../../store/actions';
import { IAppState } from '../../interfaces/intrefaces';

const mapStateToProps = (state: IAppState) => {
  return {
    data: state.todoDetails,
  };
};

const mapDispatchToProps = {
  removeNote,
};

export const TodoDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TodoDetails); 