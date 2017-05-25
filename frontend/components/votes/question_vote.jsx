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
    if (!this.props.question.voted && this.props.loggedIn && this.props.userId !== this.props.question.authorId) {
      this.props.createQuestionVote({
        author_id: this.props.userId,
        question_id: this.props.question.id,
        score: 1
      }) } else if (this.props.question.voted && this.props.loggedIn && this.props.userId !== this.props.question.authorId) {
        if (this.props.question.voteScore !== 1 ){
          this.props.changeQuestionVote({
            author_id: this.props.userId,
            question_id: this.props.question.id,
            score: 1
          })
        } else {
          this.props.changeQuestionVote({
            author_id: this.props.userId,
            question_id: this.props.question.id,
            score: 0
          })
        }

      }
  }

  handleDownVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.question.voted && this.props.loggedIn && this.props.userId !== this.props.question.authorId) {
      this.props.createQuestionVote({
        author_id: this.props.userId,
        question_id: this.props.question.id,
        score: -1
      }) } else if (this.props.question.voted && this.props.loggedIn && this.props.userId !== this.props.question.authorId){
        if (this.props.question.voteScore !== -1 ){
          this.props.changeQuestionVote({
            author_id: this.props.userId,
            question_id: this.props.question.id,
            score: -1
          })
        } else {
          this.props.changeQuestionVote({
            author_id: this.props.userId,
            question_id: this.props.question.id,
            score: 0
          })
        }

      }
  }

  render(){
    let values = this.props.question !== undefined ? this.props.question : {
      voted: false,
      votes: "",
      id: "",
      voteScore: ""
    }

    let { voteScore, votes, id } = values;
    let upped = voteScore === 1 ? "active" : "";
    let downed = voteScore === -1 ? "active" : "";
    return(
      <div className="vote-block">
        <i className={"fa fa-angle-up " + upped} aria-hidden="true" onClick={this.handleUpVote}></i>
        <p>{votes}</p>
        <i className={"fa fa-angle-down " + downed} aria-hidden="true" onClick={this.handleDownVote}></i>
      </div>
    )
  }
}

export default QuestionVote;
