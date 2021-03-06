import merge from 'lodash/merge';

import { RECEIVE_LOGOUT,
         RECEIVE_LOGIN,
         RECEIVE_ERRORS,
         CLEAR_ERRORS } from '../actions/session_actions';

import { RECEIVE_NEW_QUESTION } from '../actions/question_actions';

const _nullSession = ({
  currentUser: null,
  errors: [],
  userQuestions: []
});

const SessionReducer = ( state = _nullSession, action ) => {
  let newSession = merge( {}, state );
  switch(action.type){
    case RECEIVE_NEW_QUESTION:
      newSession.currentUser.userQuestions.push(action.question.id)
      return newSession;
    case RECEIVE_LOGIN:
      return merge( newSession, {currentUser: action.user} );
    case RECEIVE_LOGOUT:
      return _nullSession;
    case RECEIVE_ERRORS:
      return merge( newSession, {errors: action.errors} );
    case CLEAR_ERRORS:
      newSession["errors"] = [];
      return newSession;
    default:
      return state;
  }
}

export default SessionReducer;
