import { Switch, Route } from 'react-router-dom';
import { BaseRoute, AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionShowContainer from './questions/question_show_container';

const App = () =>(
  <div className="main">
    <Route path="/" component={NavBarContainer}></Route>
    <div className="center">
      <Switch>
        <Route path="/questions/:questionId" component={QuestionShowContainer} />
        <Route path="/" component={QuestionIndexContainer}  />
      </Switch>
      <BaseRoute path="/" component={SessionFormContainer} altComponent={QuestionFormContainer} />
    </div>
    <div id="footer"></div>
  </div>
)

export default App;
