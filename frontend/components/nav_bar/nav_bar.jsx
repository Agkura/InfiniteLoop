import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Search from '../search/search';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.logoutOption = this.logoutOption.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  logoutOption(){
    if (this.props.loggedIn) {
      return (
        <button className="hvr-underline-from-center" onClick={this.handleLogOut}>Logout</button>
      ) }else {
        return (
        <button className="hvr-underline-from-center" onClick={this.handleLogOut}>Login</button>
        )
      }
    }

  handleLogOut(e){
    this.props.requestLogOut();
  }

  render(){
    return(
      <div className="nav-bar">
        <Link to="/"><img src={logoWhite} className="main-logo"></img></Link>
        <Search />
        <div className="logout-button">
          {this.logoutOption()}
        </div>
      </div>
    )
  }
}

export default NavBar;
