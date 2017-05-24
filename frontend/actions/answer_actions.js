import * as AnswerUtil from '../util/answer_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_NEW_ANSWER = "RECEIVE_NEW_ANSWER";
export const DELETE_ANSWER = "DELETE_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";

//sync
export const receiveAnswers = ( answers ) => ({
  type: RECEIVE_ANSWERS,
  answers
})

export const receiveAnswer = ( answer ) => ({
  type: RECEIVE_NEW_ANSWER,
  answer
})

export const deleteAnswer = ( answer ) => ({
  type: DELETE_ANSWER,
  answer
})

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS
})

//async
export const requestAnswers = ( questionId ) => ( dispatch ) => {
  return AnswerUtil.fetchAnswers( questionId )
  .then( res => dispatch(receiveAnswers(res)))
}

export const submitAnswer = ( answer ) => ( dispatch ) => {
  return AnswerUtil.createAnswer( answer )
  .then( res => dispatch(receiveAnswer( res )),
         error => dispatch(receiveErrors( error.responseJSON )))
}

export const requestAnswerUpdate = ( answer ) => ( dispatch) => {
  return AnswerUtil.updateAnswer( answer )
  .then ( res => dispatch(receiveAnswer( res )),
          error => dispatch(receiveErrors( error )))
}

export const requestAnswerDelete = ( questionId, id ) => ( dispatch ) => {
  return AnswerUtil.destroyAnswer( questionId, id)
  .then( res => dispatch(deleteAnswer( res )))
}
