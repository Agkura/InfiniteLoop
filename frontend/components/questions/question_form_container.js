import { connect } from 'react-redux';
import { submitQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import QuestionForm from './question_form';

const mapStateToProps = ( state ) => {
  return ({
    errors: state.session.errors,
    id: state.session.currentUser.id
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    submitQuestion: ( question ) => dispatch(submitQuestion( question )),
    clearErrors: () => dispatch(clearErrors())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
