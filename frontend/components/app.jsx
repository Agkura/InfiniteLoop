import { Route } from 'react-router-dom';
import { BaseRoute, AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import QuestionIndexContainer from './questions/question_index_container';

const App = () =>(
  <div className="main">
    <Route path="/" component={NavBarContainer}></Route>
    <div className="center">
      <Route path="/" component={QuestionIndexContainer} />
      <BaseRoute component={SessionFormContainer} path="/"/>
    </div>
  </div>
)

export default App;
