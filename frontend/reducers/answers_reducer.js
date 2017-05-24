import merge from 'lodash/merge';
import { RECEIVE_ANSWERS, RECEIVE_NEW_ANSWER, DELETE_ANSWER, CLEAR_ANSWERS } from '../actions/answer_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const AnswersReducer = ( state = {}, action ) =>{
  let newState = merge( {}, state );
  console.log(action);
  switch(action.type){
    case RECEIVE_NEW_ANSWER:
      return merge(newState, {[action.answer.id]: action.answer})
    case RECEIVE_ANSWERS:
      return merge({}, action.answers);
    case DELETE_ANSWER:
      delete newState[action.answer.id];
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.results.answers);
    case CLEAR_ANSWERS:
      return {}
    default:
      return state;
  }
}

export default AnswersReducer;
