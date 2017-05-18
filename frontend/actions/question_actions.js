import * as QuestionUtil from '../util/question_util';

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";

//sync
export const receiveAllQuestions = ( questions ) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

//async
export const requestAllQuestions = () => ( dispatch ) => {
  return QuestionUtil.fetchQuestions()
  .then( res => dispatch(receiveAllQuestions(res)))
}
