import { connect } from 'react-redux';
import { submitAnswer } from '../../actions/answer_actions';
import { requestQuestion, requestQuestionDelete, requestQuestionUpdate, clearQuestions } from '../../actions/question_actions';
import QuestionShow from './question_show';

const mapStateToProps = ( state, { match } ) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  return ({
    questionId: match.params.questionId,
    question: state.questions[[Object.keys(state.questions)[0]]],
    loggedIn: Boolean(state.session.currentUser),
    userId: userId
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    submitAnswer: ( answer ) => dispatch(submitAnswer( answer )),
    requestQuestion: ( id ) => dispatch(requestQuestion(id)),
    requestQuestionDelete: ( questionId ) => dispatch(requestQuestionDelete( questionId )),
    requestQuestionUpdate: ( updatedAnswer ) => dispatch(requestQuestionUpdate(updatedAnswer)),
    clearQuestions: () => dispatch(clearQuestions())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
