import { connect } from 'react-redux';
import { requestAnswers } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';
import AnswerIndex from './answer_index';

const mapStateToProps = ( state, { match } ) => {
  return ({
    junk2: console.log(state.answers),
    junk: console.log(match.params.questionId),
    questionId: match.params.questionId,
    answers: state.answers
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    requestAnswers: ( id ) => dispatch(requestAnswers( id ))
  })
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex));
