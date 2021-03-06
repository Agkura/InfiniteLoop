import React from 'react';
import { withRouter } from 'react-router-dom';

class TabIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: "0"
    }
  }

  handleAction(property, key, contentName){
    return (e) => {
      this.setState({
        selected: key
      });
      this.props.handler(contentName);
      property();
      if (this.props.history.location.pathname !== "/")
      {this.props.history.push("/");}
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.loggedIn && !nextProps.loggedIn) {
      this.setState({
        selected: "0"
      })
    }
    let newSelected = false;
    Object.keys(nextProps.tabs).forEach( (key) => {if(nextProps.tabs[key].content==="Search Results") { newSelected = true }})
    if ( newSelected ) {
      this.setState({
        selected: "2"
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (this.props.location.pathname !== nextProps.location.pathname && nextState.selected === "2" ) {
      this.setState({
        selected: "0"
      })
    }
  }

  render(){
    let keys = this.props.loggedIn ? Object.keys(this.props.tabs).sort() : Object.keys(this.props.tabs).sort().slice(0,-1);
    let active;
    let tabs = keys.sort().map ( (key, idx) => {
      active = this.state.selected === key ? "selected" : "unselected hvr-grow";
      return(
        <li key={idx}>
          <button className={active} onClick={this.handleAction(this.props.tabs[key].action, key, this.props.tabs[key].content)}>
            {this.props.tabs[key].content}
          </button>
        </li>
      )
    })
    return(
      <nav className="nav-center">
        <ul className="tab-bar">
          {tabs}
        </ul>
      </nav>
    )
  }
}

export default withRouter(TabIndex);
