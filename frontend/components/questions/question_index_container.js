import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestAllQuestions } from '../../actions/question_actions';

const mapStateToProps = ( state ) => ({
  questions: state.questions,
  loggedIn: Boolean(state.session.currentUser)
})

const mapDispatchToProps = ( dispatch ) => ({
  requestAllQuestions: ( offset ) => dispatch(requestAllQuestions( offset ))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
