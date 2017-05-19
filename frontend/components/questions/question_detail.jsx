import React from 'react';
import { elapsed } from '../../util/time_util';
import ElapsedTime from './elapsed_time';

class QuestionDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let { title, username, created_at } = this.props.question;
    return(
      <div className="question-bar ">
        <div className="upvote-block">

        </div>
        <div className="question-grid">
          <ul className="question-upper">
            <li className="question-title"><h3>{title}</h3></li>
          </ul>
          <ul className="question-lower">
            <li className="question-fill-lower"></li>
            <li className="question-created-at"><ElapsedTime created={created_at} /></li>
            <li className="question-username">{username}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default QuestionDetail;
