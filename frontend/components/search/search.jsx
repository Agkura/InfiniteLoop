import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {query: "", hidden: ""};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.props.history.listen(location =>
      {if (location.search.slice(0,1) === '?' ) {
        this.props.requestSearchResults(location.search.slice(7))
        .then( () => this.setState({ query: ""}))
      }}
    )
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSearch(e){
    let query = this.state.query.split(" ").join("+");
    this.props.history.push(`/search?query=${query}`)
  }

  componentWillMount(){
    if (this.props.history.location.search.slice(0,1) === "?")
      {  this.props.requestSearchResults(this.props.history.location.search.slice(7))}
  }

  handleEnter(e){
    if (e.key === 'Enter') {
      let query = this.state.query.split(" ").join("+");
      this.props.history.push(`/search?query=${query}`)
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
                 value={this.state.query}
                 placeholder='Search...'
                 size="50"
                 onChange={this.update("query")}
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
