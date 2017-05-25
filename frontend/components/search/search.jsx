import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {search: "", hidden: ""};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSearch(e){
    this.props.requestSearchResults( this.state )
    .then( () => this.props.history.push("/search"))
    .then( () => this.setState({
      search: ""
    }))
  }

  handleEnter(e){
    if (e.key === 'Enter') {
      this.props.requestSearchResults( this.state )
      .then( () => this.props.history.push(`/search?${this.state.search}`))
      .then( () => this.setState({
        search: ""
      }))
    }
  }

  handleFocus(e){
    this.setState({
      hidden: "hidden"
    })
  }

  handleBlur(e){
    this.setState({
      hidden: ""
    })
  }

  render(){
    return(
      <div className="search-bar nav-2">
        <div className="search-element">
          <input type="text"
                 value={this.state.search}
                 placeholder='Search...'
                 size="50"
                 onChange={this.update("search")}
                 onKeyPress={this.handleEnter}
                 onBlur={this.handleBlur}
                 onFocus={this.handleFocus}>
          </input>
          <button  onClick={this.handleSearch}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <h1 className={this.state.hidden + " description"}>Authoritative Community for Programmers and Developers</h1>
      </div>
    )
  }
}

export default withRouter(Search);
