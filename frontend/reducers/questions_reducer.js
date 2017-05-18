import merge from 'lodash/merge';

import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';

const QuestionsReducer = ( state = {}, action ) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_QUESTIONS:
      return merge(newState, action.questions);
    default:
      return state;
  }
}

export default QuestionsReducer;
