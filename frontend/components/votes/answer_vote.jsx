import React from 'react';

class AnswerVote extends React.Component{
  constructor(props){
    super(props);
    this.state={
      blocked: false
    }
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }

    if (!this.props.answer.voted && this.props.loggedIn  && !this.state.blocked && this.props.userId !== this.props.answer.authorId) {
      this.setState({
        blocked: true
      })
      this.props.createAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: 1
      }).then(()=>this.setState({blocked: false})) } else if (this.props.answer.voted && this.props.loggedIn && !this.state.blocked && this.props.userId !== this.props.answer.authorId) {
        this.setState({
          blocked: true
        })
        if (this.props.answer.voteStatus !== 1) {
          this.props.changeAnswerVote({
          author_id: this.props.userId,
          answer_id: this.props.answer.id,
          status: 1
        }).then(()=>this.setState({blocked: false}))
      } else {
        this.props.changeAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: 0
      }).then(()=>this.setState({blocked: false}))
      }
  }
  }

  handleDownVote(e){
    if (!this.props.loggedIn) {
      alert("Login or Sign-up first");
    }

    if (!this.props.answer.voted && this.props.loggedIn && this.props.userId !== this.props.answer.authorId && !this.state.blocked) {
      this.setState({
        blocked: true
      })
      this.props.createAnswerVote({
        author_id: this.props.userId,
        answer_id: this.props.answer.id,
        status: -1
      }).then(()=>this.setState({blocked: false})) } else if (this.props.answer.voted && this.props.loggedIn && this.props.userId !== this.props.answer.authorId && !this.state.blocked){
        this.setState({
          blocked: true
        })
        if (this.props.answer.voteStatus !== -1) {
          this.props.changeAnswerVote({
            author_id: this.props.userId,
            answer_id: this.props.answer.id,
            status: -1
          }).then(()=>this.setState({blocked: false}))
        } else {
          this.props.changeAnswerVote({
            author_id: this.props.userId,
            answer_id: this.props.answer.id,
            status: 0
          }).then(()=>this.setState({blocked: false}))
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
