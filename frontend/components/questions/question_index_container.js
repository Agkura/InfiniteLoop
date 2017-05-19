import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestAllQuestions, requestUserQuestions } from '../../actions/question_actions';

const mapStateToProps = ( state ) => ({
  questions: state.questions,
  loggedIn: Boolean(state.session.currentUser)
})

const mapDispatchToProps = ( dispatch ) => ({
  requestAllQuestions: ( offset ) => dispatch(requestAllQuestions( offset )),
  requestUserQuestions: () => dispatch(requestUserQuestions())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
