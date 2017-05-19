import React from 'react';

class TabIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: "0"
    }
  }

  handleAction(property, key){
    return (e) => {
      this.setState({
        selected: key
      })
      property();
    }
  }

  render(){
    let keys = this.props.loggedIn ? Object.keys(this.props.tabs).sort() : Object.keys(this.props.tabs).sort().slice(0,-1);
    let active;
    let tabs = keys.sort().map ( (key, idx) => {
      active = this.state.selected === key ? "selected" : "unselected hvr-sink";
      return(
        <li key={idx}>
          <button className={active} onClick={this.handleAction(this.props.tabs[key].action, key)}>
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

export default TabIndex;
