import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {search: ""};
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }
  render(){
    return(
      <div className="search-bar">
        <input type="text"
               value={this.state.search}
               placeholder='eg "What is StackOverflow?"'
               size="50"
               onChange={this.update("search")}>
        </input>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Search;
