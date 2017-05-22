import { connect } from 'react-redux';
import { submitAnswer } from '../../actions/answer_actions';
import QuestionShow from './question_show';

const mapStateToProps = ( state, { match } ) => {
  return ({
    question: state.questions[match.params.questionId]
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    submitAnswer: ( answer ) => dispatch(submitAnswer( answer ))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
