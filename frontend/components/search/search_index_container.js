import { connect } from 'react-redux';
import { searchQuery } from '../../util/search_util';
import SearchIndex from '/search_index';

const mapStateToProps = ( state ) => {
  return ({
    answers: state.answers,
    questions: state.questions,
    loggedIn: Boolean(state.session.currentUser)
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    clearQuestions: () => dispatch(clearQuestions())
  })
}

export default connet(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
