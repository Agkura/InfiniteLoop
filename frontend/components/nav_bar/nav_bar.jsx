import React from 'react';
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
        <button className="hvr-underline-from-center nav-3" onClick={this.handleLogOut}>
          <Link to="/" >Logout</Link>
        </button>
      ) }else {
        return (
          <p className="nav-3"></p>
        )
      }
    }

  handleLogOut(e){
    this.props.requestLogOut();
  }

  render(){
    return(
      <div className="nav-bar">
        <div className="nav-1">
          <Link to="/" ><img src={logoWhite} className="main-logo"></img></Link>
        </div>

        <Search requestSearchResults={this.props.requestSearchResults}/>
        <div className="nav-3">
          <div className="logout-button">
            {this.logoutOption()}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
