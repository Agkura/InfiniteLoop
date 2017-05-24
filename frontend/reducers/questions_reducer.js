import merge from 'lodash/merge';

import { RECEIVE_ALL_QUESTIONS, RECEIVE_NEW_QUESTION,
         DELETE_QUESTION, CLEAR_QUESTIONS } from '../actions/question_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const QuestionsReducer = ( state = {}, action ) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_NEW_QUESTION:
      return Object.assign(newState, action.question)
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, action.questions);
    case DELETE_QUESTION:
      delete newState[action.question.id];
      return newState;
    case CLEAR_QUESTIONS:
      return {}
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.results.questions);
    default:
      return state;
  }
}

export default QuestionsReducer;
