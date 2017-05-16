import { Link } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      form: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  changeTab(e){
    let newTab = this.state.form === 'login' ? 'other' : 'login';
    this.setState({
      form: newTab
    });
  }

  render(){
    let tabValue = this.state.form === 'login' ? "Login" : "Sign Up";
    let nextTabValue = tabValue === "Login" ? "Sign Up" : "Login";
    let emailTitleBlock = (
      <div className="title-block">
        <p className="flex-1">Email</p><p className="flex-2"></p>
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
            <div className="upper-tab"><p className="tab-1">
                <Link className="link" to={"/" + nextTabValue.toLowerCase()}><button onClick={this.changeTab}>{nextTabValue}</button></Link>
            </p></div>
          <div className="lower-tab"><p className="tab-2">
            {tabValue}
          </p></div>
          </div>
          <div className="title-block">
            <p className="flex-1">Username</p><p className="flex-2"></p>
          </div>
          <input type="text"
                 value={this.state.username}
                 placeholder="e.g. hackreactor"
                 onChange={this.update("username")}>
          </input>
          {emailTitleBlock}
          {emailBlock}
         <div className="title-block">
           <p className="flex-1">Password</p><p className="flex-2"></p>
         </div>
         <input type="password"
                value={this.state.password}
                placeholder="e.g. !password"
                onChange={this.update("password")}>
         </input>
         <input type="submit"
                value="Submit">
         </input>
       </form>
      </div>
    );
  }
}

export default SessionForm;
