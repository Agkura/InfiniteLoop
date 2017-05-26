import React from 'react';
import { elapsed } from '../../util/time_util';
import ElapsedTime from './elapsed_time';
import { Link } from 'react-router-dom';
import QuestionVoteContainer from '../votes/question_vote_container';

class QuestionDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let values;
    if (Boolean(this.props.question)){
      values = this.props.question;
    } else {
      values = { title: "", username: "", createdAt: "", id: "", answerCount: 0};
    }
    let { title, username, createdAt, id, answerCount } =  values;
    let answered = answerCount > 0 ? "answered-box" : "";
    return(
      <div className="question-bar ">
        <div className="upvote-block">
          <QuestionVoteContainer question={this.props.question} />
          <div className={"answered " + answered}>
            <h3>{answerCount}</h3>
            <h4>Answers</h4>
          </div>
        </div>
        <div className="question-grid">
          <ul className="question-upper">
            <li className="question-title"><h3><Link to={"/questions/" + id} >{title}</Link></h3></li>
          </ul>
          <ul className="question-lower">
            <li className="question-fill-lower"></li>
            <li className="question-created-at"><ElapsedTime created={createdAt} /></li>
            <li className="question-username">{username}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default QuestionDetail;
