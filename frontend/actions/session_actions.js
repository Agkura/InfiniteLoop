import * as APIUtil from '../util/session_util';

export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// sync

export const receiveLogOut = () => ({
  type: RECEIVE_LOGOUT
});

export const receiveLogIn = ( user ) => ({
  type: RECEIVE_LOGIN,
  user
});

export const receiveErrors = ( errors ) => ({
  type: RECEIVE_ERRORS,
  errors
});

//async

export const requestLogIn = ( user ) => ( dispatch ) => {
  return APIUtil.logIn(user)
  .then( ( success ) => dispatch(receiveLogIn( success )),
         ( error ) => dispatch(receiveErrors( error.responseJSON ))
       );
};

export const requestLogOut = ( ) => ( dispatch ) => {
  return APIUtil.logOut()
  .then( () => dispatch(receiveLogOut()));
};

export const requestSignUp = ( user ) => ( dispatch ) => {
  return APIUtil.createUser(user)
  .then( ( newUser ) => dispatch(receiveLogIn( newUser )),
         ( error ) => dispatch(receiveErrors( error ))
       );
};
