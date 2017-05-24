import { connect } from 'react-redux';
import { requestAnswers, submitAnswer, clearAnswers } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';
import AnswerIndex from './answer_index';

const mapStateToProps = ( state, { match } ) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  let questionAuthorId = Object.keys(state.questions).length > 0 ? state.questions[Object.keys(state.questions)[0]].authorId : "";
  return ({
    questionId: match.params.questionId,
    answers: state.answers,
    loggedIn: Boolean(state.session.currentUser),
    userId: userId,
    questionAuthorId: questionAuthorId
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    requestAnswers: ( id ) => dispatch(requestAnswers( id )),
    submitAnswer: ( newAnswer ) => dispatch(submitAnswer( newAnswer )),
    clearAnswers: () => dispatch(clearAnswers())
  })
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex));
