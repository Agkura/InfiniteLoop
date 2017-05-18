import merge from 'lodash/merge';
import { RECEIVE_ANSWERS, RECEIVE_NEW_ANSWER } from '../actions/answer_actions';

const AnswersReducer = ( state = {}, action ) =>{
  let newState = merge( {}, state );
  switch(action.type){
    case RECEIVE_NEW_ANSWER:
      return merge(newState, {[action.answer.id]: action.answer})
    case RECEIVE_ANSWERS:
      return merge(newState, action.answers);
    default:
      return state;
  }
}

export default AnswersReducer;
