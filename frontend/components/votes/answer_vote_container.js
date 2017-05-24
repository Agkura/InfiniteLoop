import { connect } from 'react-redux';
import { createAnswerVote, changeAnswerVote } from '../../actions/vote_actions';
import AnswerVote from './answer_vote';

const mapStateToProps = ( state, ownProps) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  let answer = ownProps.answer === undefined ? {} : ownProps.answer;
  return {
    loggedIn: Boolean(state.session.currentUser),
    userId: userId,
    answer: answer
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createAnswerVote: ( newVote ) => dispatch(createAnswerVote( newVote )),
    changeAnswerVote: ( editVote ) => dispatch(changeAnswerVote( editVote ))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVote);
