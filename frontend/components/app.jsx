import { Route } from 'react-router-dom';
import { BaseRoute, AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
import SessionFormContainer from './session/session_form_container';

const App = () =>(
  <div className="main">
    <BaseRoute component={SessionFormContainer} path="/"/>
  </div>
)

export default App;
