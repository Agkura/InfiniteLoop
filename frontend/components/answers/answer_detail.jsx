import React from 'react';
import ElapsedTime from '../questions/elapsed_time';
import AnswerMain from './answer_main';

class AnswerDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let values = Boolean(this.props.answer) ? this.props.answer : {
      body: "",
      username: "",
      createdAt: "",
      authorId: "",
      id: ""
    }

    let { body, username, createdAt, authorId, id } = values;

    return(
      <ul className="answer-details">
        <AnswerMain answer={this.props.answer}
                    body={body}
                    authorId={authorId}
                    questionId={this.props.questionId}
                    loggedIn={this.props.loggedIn}
                    userId={this.props.userId}
                    id={id}
                    requestAnswerUpdate={this.props.requestAnswerUpdate}
                    requestAnswerDelete={this.props.requestAnswerDelete}
                    />
        <div className="username-time">
          <li className="time"><ElapsedTime created={createdAt} /></li>
          <li className="username">{username}</li>
        </div>
      </ul>
    )
  }
}

export default AnswerDetail;
