import { connect } from 'react-redux';
import { searchQuery } from '../../util/search_util';

const mapStateToProps = ( state ) => {
  return ({
    answers: state.answers,
    questions: state.questions
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    searchQuery: ( query ) => dispatch(searchQuery( query ))
  })
}
