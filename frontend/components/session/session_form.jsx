import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render(){
    return(
      <div className="session-form">
        <img src={logo} className="form-logo"></img>
        <form className="main-session-form">
          <div className="auth-tabs">
            <div className="upper-tab"><p className="tab-1">Login</p></div>
            <div className="lower-tab"><p className="tab-2">Signin</p></div>
          </div>
          <div className="title-block">
            <p className="flex-1">Username</p><p className="flex-2"></p>
          </div>
          <input type="text"
                 value={this.state.username}
                 placeholder="e.g. hackreactor">
          </input>
          <div className="title-block">
            <p className="flex-1">Email</p><p className="flex-2"></p>
          </div>
         <input type="text"
                value={this.state.email}
                placeholder="e.g. stack@overflow.com">
         </input>
         <div className="title-block">
           <p className="flex-1">Password</p><p className="flex-2"></p>
         </div>
         <input type="password"
                value={this.state.password}
                placeholder="e.g. !password">
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
