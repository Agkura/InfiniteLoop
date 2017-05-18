import * as AnswerUtil from '../util/answer_util';

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";

//sync
export const receiveAnswers = ( answers ) => ({
  type: RECEIVE_ANSWERS,
  answers
})

//async
export const requestAnswers = ( questionId ) => ( dispatch ) => {
  return AnswerUtil.fetchAnswers( questionId )
  .then( res => dispatch(receiveAnswers(res)))
}
