import { connect } from 'react-redux';
import { requestLogIn, requestSignUp, clearErrors } from '../../actions/session_actions';
import { demoUser } from '../../util/demo_util';
import SessionForm from './session_form';

const mapStateToProps = ( state, { location } ) => {
  const formType = location.pathname.slice(1);
  return{
    errors: state.session.errors,
    formType
  }
};


const mapDispatchToProps = ( dispatch ) => ({
    requestLogIn: user => dispatch(requestLogIn(user)),
    requestSignUp: user => dispatch(requestSignUp(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
