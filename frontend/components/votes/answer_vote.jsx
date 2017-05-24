import React from 'react';

class AnswerVote extends React.Component{
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.answer.voted && this.props.loggedIn ) {
      this.props.createAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: 1
      }) } else if (this.props.answer.voted && this.props.loggedIn) {
        this.props.changeAnswerVote({
          author_id: this.props.userId,
          answer_id: this.props.answer.id,
          status: 1
        })
      }
  }

  handleDownVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.answer.voted && this.props.loggedIn ) {
      this.props.createAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: -1
      }) } else if (this.props.answer.voted && this.props.loggedIn){
        this.props.changeAnswerVote({
          author_id: this.props.userId,
          answer_id: this.props.answer.id,
          status: -1
        })
      }
  }

  render(){
    let values = this.props.answer !== undefined ? this.props.answer : {
      voted: false,
      votes: "",
      id: ""
    }

    let { voted, votes, id } = values;
    return(
      <div className="vote-block">
        <p>{votes}</p>
        <p onClick={this.handleUpVote}>up</p>
        <p onClick={this.handleDownVote}>down</p>
      </div>
    )
  }
}

export default AnswerVote;
