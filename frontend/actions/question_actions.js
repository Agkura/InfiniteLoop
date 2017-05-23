import * as QuestionUtil from '../util/question_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";

//sync
export const receiveAllQuestions = ( questions ) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestion = ( question ) => ({
  type: RECEIVE_NEW_QUESTION,
  question
})

export const deleteQuestion = ( question ) => ({
  type: DELETE_QUESTION,
  question
})

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS
})

//async
export const requestAllQuestions = ( offset ) => ( dispatch ) => {
  return QuestionUtil.fetchQuestions( offset )
  .then( res => dispatch(receiveAllQuestions(res)))
}

export const submitQuestion = ( question ) => ( dispatch ) => {
  return QuestionUtil.createQuestion( question )
  .then( res => dispatch(receiveQuestion( res )),
         error => dispatch(receiveErrors(error.responseJSON)))
}

export const requestQuestionUpdate = ( question ) => ( dispatch ) => {
  return QuestionUtil.updateQuestion( question )
  .then( res => dispatch(receiveAllQuestions( res )),
         error => dispatch(receiveErrors( error.responseJSON)))
}

export const requestQuestionDelete = ( id ) => ( dispatch ) => {
  return QuestionUtil.destroyQuestion( id )
  .then( res => dispatch(deleteQuestion( res )))
}

export const requestUserQuestions = () => ( dispatch ) => {
  return QuestionUtil.userQuestions()
  .then( res => dispatch(receiveAllQuestions( res )))
}

export const requestTrendingQuestions = ( offset ) => ( dispatch ) => {
  return QuestionUtil.trendingQuestions( offset )
  .then( res => dispatch(receiveAllQuestions( res )))
}

export const requestQuestion = ( id ) => ( dispatch ) => {
  return QuestionUtil.fetchQuestion( id )
  .then( res => dispatch(receiveAllQuestions( res )))
}
