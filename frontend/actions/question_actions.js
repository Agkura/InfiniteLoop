import * as QuestionUtil from '../util/question_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";

//sync
export const receiveAllQuestions = ( questions ) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestion = ( question ) => ({
  type: RECEIVE_NEW_QUESTION,
  question
})

//async
export const requestAllQuestions = () => ( dispatch ) => {
  return QuestionUtil.fetchQuestions()
  .then( res => dispatch(receiveAllQuestions(res)))
}

export const submitQuestion = ( question ) => ( dispatch ) => {
  return QuestionUtil.createQuestion( question )
  .then( res => dispatch(receiveQuestion( res )),
         error => dispatch(receiveErrors(error.responseJSON)))
}

export const requestQuestionUpdate = ( question ) => ( dispatch ) => {
  return QuestionUtil.updateQuestion( question )
  .then( res => dispatch(receiveQuestion( res )),
         error => dispatch(receiveErrors( error.responseJSON)))
}
