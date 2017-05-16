import { connect } from 'react-redux';
import { requestLogIn, requestSignUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state ) => ({
  errors: state.errors
});


const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? requestSignUp : requestLogIn;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
