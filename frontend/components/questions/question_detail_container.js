import { connect } from 'react-redux';
// import { requestAnswers } from '../../actions/answer_actions';
import QuestionDetail from './question_detail';

const mapStateToProps = ( state, ownProps ) => ({
  question: state.questions[ownProps.questionId]
})

// const mapDispatchToProps = ( dispatch ) => ({
//   requestAnswers: ( id ) => dispatch(requestAnswers( id ))
// })

export default connect(
  mapStateToProps,
  null
)(QuestionDetail);
