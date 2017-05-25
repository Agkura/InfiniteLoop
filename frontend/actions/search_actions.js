import * as SearchUtil from '../util/search_util';
import { RECEIVE_ALL_QUESTIONS } from './question_actions';


export const receiveSearchResults = ( questions ) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
})

export const requestSearchResults = ( query ) => ( dispatch ) => {
  return SearchUtil.searchQuery( query )
  .then( el => dispatch(receiveSearchResults( el )))
}
