import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = ( state ) => ({
  questions: state.questionsm
  loggedIn: Boolean(state.session.currentUser)
})

export default connect(
  mapStateToProps,
  null
)(QuestionIndex);
