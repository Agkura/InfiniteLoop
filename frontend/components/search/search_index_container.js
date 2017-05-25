import { connect } from 'react-redux';
import { searchQuery } from '../../util/search_util';
import SearchIndex from '/search_index';

const mapStateToProps = ( state ) => {
  return ({
    answers: state.answers,
    questions: state.questions
  })
}

// const mapDispatchToProps = ( dispatch ) => {
//   return ({
//
//   })
// }

export default connet(
  mapStateToProps,
  null
)(SearchIndex);
