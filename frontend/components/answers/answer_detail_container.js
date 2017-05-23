import { connect } from 'react-redux';
import { requestAnswerUpdate, requestAnswerDelete } from '../../actions/answer_actions';
import AnswerDetail from './answer_detail';

const mapStateToProps = ( state, ownProps ) => {
  let userId = Boolean(state.session.currentUser) ? state.session.currentUser.id : "";
  return ({
    answer: ownProps.answer,
    questionId: ownProps.questionId,
    loggedIn: Boolean(state.session.currentUser),
    userId: userId
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return({
    requestAnswerUpdate: ( answer ) => dispatch(requestAnswerUpdate( answer )),
    requestAnswerDelete: ( questionId, id ) => dispatch(requestAnswerDelete( questionId, id ))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerDetail);
