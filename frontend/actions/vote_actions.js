import * as VoteUtil from '../util/vote_util';
import { receiveAnswer } from './answer_actions';
import { receiveQuestion } from './question_actions';

export const RECEIVE_VOTE = "RECEIVE_VOTE";

export const receiveVoteStatus = ( voted ) => ({
  type: RECEIVE_VOTE,
  voted
})

export const createAnswerVote = ( vote ) => ( dispatch ) => {
  return VoteUtil.voteAnswer( vote )
  .then( answer => dispatch(receiveAnswer( answer )))
}

export const createQuestionVote = ( vote ) => ( dispatch) => {
  return VoteUtil.voteQuestion( vote )
  .then( question => dispatch(receiveQuestion( question )))
}

export const changeAnswerVote = ( vote ) => ( dispatch ) => {
  return VoteUtil.changeAnswerVote( vote )
  .then( answer => dispatch(receiveAnswer( answer )))
}

export const changeQuestionVote = ( vote ) => ( dispatch ) => {
  return VoteUtil.changeQuestionVote( vote )
  .then ( question => dispatch(receiveQuestion( question )))
}
