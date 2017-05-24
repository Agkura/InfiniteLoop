import { connect } from 'react-redux';
import { requestAnswers, submitAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';
import AnswerIndex from './answer_index';

const mapStateToProps = ( state, { match } ) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  return ({
    questionId: match.params.questionId,
    answers: state.answers,
    loggedIn: Boolean(state.session.currentUser),
    userId: userId,
    questionAuthorId: state.questions.authorId
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    requestAnswers: ( id ) => dispatch(requestAnswers( id )),
    submitAnswer: ( newAnswer ) => dispatch(submitAnswer( newAnswer ))
  })
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex));
