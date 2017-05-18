import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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
  ReactDOM.render(<Root store={store} />, root);
})

import { createUser, fetchUser, logIn, logOut } from './util/session_util';
import { requestLogIn, requestLogOut, requestSignUp } from './actions/session_actions';
import { demoUser } from './util/demo_util';
import { fetchQuestions, createQuestion } from './util/question_util';
import { requestAllQuestions, submitQuestion } from './actions/question_actions';
import { fetchAnswers } from './util/answer_util';
import { requestAnswers } from './actions/answer_actions';

window.createUser = createUser;
window.fetchUser = fetchUser;
window.logIn = logIn;
window.logOut = logOut;
window.requestLogIn = requestLogIn;
window.requestLogOut = requestLogOut;
window.requestSignUp = requestSignUp;
window.demoUser = demoUser;
window.fetchQuestions = fetchQuestions;
window.requestAllQuestions = requestAllQuestions;
window.fetchAnswers = fetchAnswers;
window.requestAnswers = requestAnswers;
window.createQuestion = createQuestion;
window.submitQuestion = submitQuestion;

window.aUser = {
  username: "username",
  email: "username@username",
  password: "username"
}
