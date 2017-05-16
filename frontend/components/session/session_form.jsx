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
        <img className="form-logo"></img>
        <ul className="main-session-form">
          <input type="text"
                 value={this.state.username}
                 placeholder="Username">
          </input>
         <input type="text"
                value={this.state.email}
                placeholder="Email">
         </input>
         <input type="password"
                value={this.state.password}
                placeholder="Password">
         </input>
        </ul>
      </div>
    );
  }
}

export default SessionForm;
