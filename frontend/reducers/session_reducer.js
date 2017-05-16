import merge from 'lodash/merge';

import { RECEIVE_LOGOUT,
         RECEIVE_LOGIN,
         RECEIVE_ERRORS } from '../actions/session_actions';

const _nullSession = ({
  currentUser: null,
  errors: [],
  userQuestions: []
});

const SessionReducer = ( state = _nullSession, action ) => {
  let newSession = merge( {}, state );
  switch(action.type){
    case RECEIVE_LOGIN:
      return merge( newSession, {currentUser: action.user} );
    case RECEIVE_LOGOUT:
      return _nullSession;
    case RECEIVE_ERRORS:
      return merge( newSession, {errors: action.errors} );
    default:
      return state;
  }
}

export default SessionReducer;
