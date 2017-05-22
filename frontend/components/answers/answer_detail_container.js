import { connect } from 'react-redux';
import { requestAnswerUpdate, requestAnswerDelete } from '../../actions/answer_actions';
import AnswerDetail from './answer_detail';

const mapStateToProps = ( state, ownProps ) => {
  return ({
    answer: ownProps.answer,
    questionId: ownProps.questionId
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
