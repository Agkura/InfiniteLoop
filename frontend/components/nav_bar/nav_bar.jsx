import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.logoutOption = this.logoutOption.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.reset = this.reset.bind(this);
  }

  logoutOption(){
    if (this.props.loggedIn) {
      return (
        <div className="logout-button">
          <h4 className="username-nav-bar">{this.props.username}</h4>
          <button className="hvr-underline-from-center" onClick={this.handleLogOut}>
            <Link to="/" >Logout</Link>
          </button>
        </div>
      ) }else {
        return (
          null
        )
      }
    }

  handleLogOut(e){
    this.props.requestLogOut();
  }

  reset(e){
    this.props.requestAllQuestions( 0 );
  }

  render(){
    return(
      <div className="nav-bar">
        <div className="nav-1">
          <Link onClick={this.reset} to="/" ><img src={logoWhite} className="main-logo"></img></Link>
        </div>

        <Search requestSearchResults={this.props.requestSearchResults}/>
        <div className="nav-3">
            {this.logoutOption()}
        </div>
      </div>
    )
  }
}

export default NavBar;
