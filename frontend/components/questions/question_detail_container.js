import { connect } from 'react-redux';

import QuestionDetail from './question_detail';

const mapStateToProps = ( state, ownProps ) => ({
  question: state.questions[ownProps.questionId]
})


export default connect(
  mapStateToProps,
  null
)(QuestionDetail);
