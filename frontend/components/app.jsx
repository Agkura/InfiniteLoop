import { Route } from 'react-router-dom';
import React from 'react';
import SessionFormContainer from './session/session_form_container';

const App = () =>(
  <div className="main">
    <h1>Infinite Loop</h1>
    <SessionFormContainer />
  </div>
)

export default App;
