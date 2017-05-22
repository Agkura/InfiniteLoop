import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestAllQuestions, requestUserQuestions, clearQuestions } from '../../actions/question_actions';

const mapStateToProps = ( state ) => {
  let userQuestions;
  if ( Boolean(state.session.currentUser) ) { userQuestions = state.session.currentUser.userQuestions}
  return ({
    questions: state.questions,
    userQuestions: userQuestions,
    loggedIn: Boolean(state.session.currentUser)
  })
}

const mapDispatchToProps = ( dispatch ) => ({
  requestAllQuestions: ( offset ) => dispatch(requestAllQuestions( offset )),
  requestUserQuestions: ( offset ) => dispatch(requestUserQuestions( offset )),
  requestTrendingQuestions: ( offset ) => dispatch(requestTrendingQuestions( offset )),
  clearQuestions: dispatch(clearQuestions())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
