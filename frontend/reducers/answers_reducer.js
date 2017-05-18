import merge from 'lodash/merge';
import { RECEIVE_ANSWERS } from '../actions/answer_actions';

const AnswersReducer = ( state = {}, action ) =>{
  let newState = merge( {}, state );
  switch(action.type){
    case RECEIVE_ANSWERS:
      return merge(newState, action.answers);
    default:
      return state;
  }
}

export default AnswersReducer;
