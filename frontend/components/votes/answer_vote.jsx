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
        if (this.props.answer.voteStatus !== 1) {
          this.props.changeAnswerVote({
          author_id: this.props.userId,
          answer_id: this.props.answer.id,
          status: 1
        })
      } else {
        this.props.changeAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: 0
      })
      }
  }
  }

  handleDownVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }
    if (!this.props.answer.voted && this.props.loggedIn && this.props.userId !== this.props.answer.authorId) {
      this.props.createAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: -1
      }) } else if (this.props.answer.voted && this.props.loggedIn && this.props.userId !== this.props.answer.authorId){
        if (this.props.answer.voteStatus !== -1) {
          this.props.changeAnswerVote({
            author_id: this.props.userId,
            answer_id: this.props.answer.id,
            status: -1
          })
        } else {
          this.props.changeAnswerVote({
            author_id: this.props.userId,
            answer_id: this.props.answer.id,
            status: 0
          })
        }

      }
  }

  render(){
    let values = this.props.answer !== undefined ? this.props.answer : {
      votes: "",
      id: "",
      voteStatus: ""
    }

    let { voteStatus, votes, id } = values;
    let upped = voteStatus === 1 ? "active" : "";
    let downed = voteStatus === -1 ? "active" : "";
    return(
      <div className="vote-block">
        <i className={"fa fa-angle-up " + upped} aria-hidden="true" onClick={this.handleUpVote}></i>
        <p>{votes}</p>
        <i className={"fa fa-angle-down " + downed} aria-hidden="true" onClick={this.handleDownVote}></i>
      </div>
    )
  }
}

export default AnswerVote;
