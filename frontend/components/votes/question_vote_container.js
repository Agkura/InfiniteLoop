import { connect } from 'react-redux';
import { createQuestionVote, changeQuestionVote } from '../../actions/vote_actions';
import QuestionVote from './question_vote';

const mapStateToProps = ( state, ownProps) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  let question = ownProps.question === undefined ? {} : ownProps.question;
  return {
    loggedIn: Boolean(state.session.currentUser),
    userId: userId,
    question: question
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createQuestionVote: ( newVote ) => dispatch(createQuestionVote( newVote )),
    changeQuestionVote: ( editVote ) => dispatch(changeQuestionVote( editVote ))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionVote);
