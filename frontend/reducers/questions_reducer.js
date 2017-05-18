import merge from 'lodash/merge';

import { RECEIVE_ALL_QUESTIONS, RECEIVE_NEW_QUESTION, DELETE_QUESTION } from '../actions/question_actions';

const QuestionsReducer = ( state = {}, action ) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_NEW_QUESTION:
      return merge(newState, {[action.question.id]: action.question})
    case RECEIVE_ALL_QUESTIONS:
      return merge(newState, action.questions);
    case DELETE_QUESTION:
      delete newState[action.question.id];
      return newState;
    default:
      return state;
  }
}

export default QuestionsReducer;
