import React from 'react';

class QuestionVote extends React.Component{
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.question.voted && this.props.loggedIn ) {
      this.props.createQuestionVote({
        author_id: this.props.userId,
        question_id: this.props.question.id,
        score: 1
      }) } else if (this.props.question.voted && this.props.loggedIn) {
        this.props.changeQuestionVote({
          author_id: this.props.userId,
          question_id: this.props.question.id,
          score: 1
        })
      }
  }

  handleDownVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.question.voted && this.props.loggedIn ) {
      this.props.createQuestionVote({
        author_id: this.props.userId,
        question_id: this.props.question.id,
        score: -1
      }) } else if (this.props.question.voted && this.props.loggedIn){
        this.props.changeQuestionVote({
          author_id: this.props.userId,
          question_id: this.props.question.id,
          score: -1
        })
      }
  }

  render(){
    let values = this.props.question !== undefined ? this.props.question : {
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

export default QuestionVote;
