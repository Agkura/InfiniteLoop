import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const Modal = require('react-modal');

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
})

// import { createUser, fetchUser, logIn, logOut } from './util/session_util';
// import { requestLogIn, requestLogOut, requestSignUp } from './actions/session_actions';
// import { demoUser } from './util/demo_util';
// import { fetchQuestions, createQuestion, updateQuestion, destroyQuestion, userQuestions, trendingQuestions } from './util/question_util';
// import { requestAllQuestions, submitQuestion, requestQuestionUpdate, requestQuestionDelete, requestUserQuestions, requestTrendingQuestions } from './actions/question_actions';
// import { fetchAnswers, createAnswer, updateAnswer } from './util/answer_util';
// import { requestAnswers, submitAnswer, requestAnswerUpdate, requestAnswerDelete } from './actions/answer_actions';
// import { elapsed } from './util/time_util';
import { searchQuery } from './util/search_util';
import { requestSearchResults } from './actions/search_actions';
import { voteAnswer, voteQuestion, changeAnswerVote, changeQuestionVote } from './util/vote_util';

// window.createUser = createUser;
// window.fetchUser = fetchUser;
// window.logIn = logIn;
// window.logOut = logOut;
// window.requestLogIn = requestLogIn;
// window.requestLogOut = requestLogOut;
// window.requestSignUp = requestSignUp;
// window.demoUser = demoUser;
// window.fetchQuestions = fetchQuestions;
// window.requestAllQuestions = requestAllQuestions;
// window.fetchAnswers = fetchAnswers;
// window.requestAnswers = requestAnswers;
// window.createQuestion = createQuestion;
// window.submitQuestion = submitQuestion;
// window.createAnswer = createAnswer;
// window.updateQuestion = updateQuestion;
// window.requestQuestionUpdate = requestQuestionUpdate;
// window.updateAnswer = updateAnswer;
// window.submitAnswer = submitAnswer;
// window.requestAnswerUpdate = requestAnswerUpdate;
// window.destroyQuestion = destroyQuestion;
// window.requestQuestionDelete = requestQuestionDelete;
// window.requestAnswerDelete = requestAnswerDelete;
// window.elapsed = elapsed;
// window.userQuestions = userQuestions;
// window.requestUserQuestions = requestUserQuestions;
// window.trendingQuestions = trendingQuestions;
// window.requestTrendingQuestions = requestTrendingQuestions;
window.searchQuery = searchQuery;
window.requestSearchResults = requestSearchResults;
window.voteAnswer = voteAnswer;
window.voteQuestion = voteQuestion;
window.changeAnswerVote = changeAnswerVote;
window.changeQuestionVote = changeQuestionVote;
