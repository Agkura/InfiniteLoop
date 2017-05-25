import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { requestLogOut } from '../../actions/session_actions';
import { requestSearchResults } from '../../actions/search_actions';

const mapStateToProps = ( state ) => {
  let username = "";
  if (Boolean(state.session.currentUser)){username = state.session.currentUser.username}
  return {
    loggedIn: Boolean(state.session.currentUser),
    username: username
  }
};

const mapDispatchToProps = ( dispatch ) => ({
  requestLogOut: () => dispatch(requestLogOut()),
  requestSearchResults: ( query ) => dispatch(requestSearchResults( query ))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
