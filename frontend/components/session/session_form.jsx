import { Link, NavLink } from 'react-router-dom';
import { demoUser } from '../../util/demo_util';
import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      form: this.props.formType,
      passwordError: "",
      usernameError: "",
      emailError: "",
      credentials: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLogIn = this.setLogIn.bind(this);
    this.setSignUp = this.setSignUp.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps.errors.length > 0 ){
      nextProps.errors.forEach( el => {
        if ( el.indexOf("Password") >= 0){ this.setState({passwordError: el});}
        if ( el.indexOf("Username") >= 0){ this.setState({usernameError: el});}
        if ( el.indexOf("Email") >= 0){ this.setState({emailError: el});}
        if ( el.indexOf("Credential") >= 0){ this.setState({usernameError: el});}
      })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.form === 'login'){
      this.props.requestLogIn(this.state);
    } else {
      this.props.requestSignUp(this.state);
    }
  }

  setLogIn(e){
    this.setState({
      form: "login"
    })
  }

  setSignUp(e){
    this.setState({
      form: "signup"
    })
  }

  handleDemo(e){
    e.preventDefault();
    this.props.requestLogIn(demoUser());
  }

  render(){
    let colorTab = this.state.form === 'login' ? "" : "color";
    let tabValue = this.state.form === 'login' ? "Login" : "Sign Up";
    let contextTab = tabValue === 'Login' ? "Welcome Back" : "Create Account";
    let emailTitleBlock = (
      <div className="title-block">
        <p className="flex-1">Email</p><p className="flex-2">{this.state.emailError}</p>
      </div>
    );
    let emailBlock = (
      <input type="text"
             value={this.state.email}
             placeholder="e.g. stack@overflow.com"
             onChange={this.update("email")}>
      </input>
    );
    emailTitleBlock = tabValue === "Sign Up" ? emailTitleBlock : ( <p></p>);
    emailBlock = tabValue === "Sign Up" ? emailBlock : ( <p></p>);
    return(
      <div className="session-form">
        <img src={logo} className="form-logo"></img>
        <form className="main-session-form" onSubmit={this.handleSubmit}>
          <div className="auth-tabs">

            <div className="upper-tab">
              <p className="tab-1">
                <Link className={colorTab} to="/signup" ><button  onClick={this.setSignUp}>Sign up</button></Link>
              </p>
              <p className="tab-2">
                <NavLink className="link" to="/login" activeClassName="tab-2-active"><button onClick={this.setLogIn}>Login</button></NavLink>
              </p>
            </div>
          <div className="lower-tab">
            <div className="tab-3"><p>
              {contextTab}
            </p></div>
          </div>
          </div>
          <div className="title-block">
            <p className="flex-1">Username</p><p className="flex-2">{this.state.usernameError}</p>
          </div>
          <input type="text"
                 value={this.state.username}
                 placeholder="e.g. hackreactor"
                 onChange={this.update("username")}>
          </input>
          {emailTitleBlock}
          {emailBlock}
         <div className="title-block">
           <p className="flex-1">Password</p><p className="flex-2">{this.state.passwordError}</p>
         </div>
         <input type="password"
                value={this.state.password}
                placeholder="e.g. !password"
                onChange={this.update("password")}>
         </input>
         <button className="demo" onClick={this.handleDemo}>Demo</button>
         <input type="submit"
                value="Submit">
         </input>
       </form>
      </div>
    );
  }
}

export default SessionForm;
