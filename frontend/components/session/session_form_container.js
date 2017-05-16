import { connect } from 'react-redux';
import { requestLogIn, requestSignUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state ) => ({
  errors: state.errors
});

const dispatchStateToProps = ( dispatch ) => ({
  requestSignUp: ( user ) => dispatch(requestLogIn( user )),
  requestLogIn: ( user ) => dispatch(requestSignUp( user ))
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(SessionForm);
