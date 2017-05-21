import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import QuestionForm from '../components/questions/question_form';
import { submitQuestions } from '../actions/question_actions';

const Auth = ( { component: Component, path, loggedIn } ) => (
  <Route path={path} render={ ( props ) => (
      loggedIn ? (
        <Component  {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
);

const Protected = ( { component: Component, path, loggedIn } ) => (
  <Route path={path} render={ ( props ) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
);

const Base = ( { component: Component, path, loggedIn, submitQuestion, authorId } ) => (
  <Route path={path} render={ ( props ) => (
      loggedIn ? (
        <QuestionForm  submitQuestion={submitQuestion} id={authorId}/>
      ) : (
        <Component {...props} />
      )
    )} />
);

const mapStateToProps = ( state ) => {
  let id;
  if (Boolean(state.session.currentUser)){ id = state.session.currentUser.id}
  return {
    loggedIn: Boolean(state.session.currentUser),
    authorId: id
  };
}

const mapDispatchToProps = ( dispatch ) => {
  return {submitQuestion: ( question ) => dispatch(submitQuestion( question ))}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const BaseRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Base));
