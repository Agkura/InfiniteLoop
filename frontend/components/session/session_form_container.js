import { connect } from 'react-redux';
import { requestLogIn, requestSignUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state ) => ({
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    requestLogIn: user => dispatch(requestLogIn(user)),
    requestSignUp: user => dispatch(requestSignUp(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
