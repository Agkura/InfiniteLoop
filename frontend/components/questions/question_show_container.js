import { connect } from 'react-redux';
import { submitAnswer } from '../../actions/answer_actions';
import { requestQuestion } from '../../actions/question_actions';
import QuestionShow from './question_show';

const mapStateToProps = ( state, { match } ) => {
  return ({
    questionId: match.params.questionId,
    question: state.questions
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    submitAnswer: ( answer ) => dispatch(submitAnswer( answer )),
    requestQuestion: ( id ) => dispatch(requestQuestion(id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
