import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})

import { createUser, fetchUser, logIn, logOut } from './util/session_util';

window.createUser = createUser;
window.fetchUser = fetchUser;
window.logIn = logIn;
window.logOut = logOut;

window.aUser = {
  username: "username",
  email: "username@username",
  password: "username"
}
