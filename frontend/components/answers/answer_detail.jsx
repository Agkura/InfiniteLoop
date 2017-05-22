import React from 'react';

class AnswerDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let values = Boolean(this.props.answer) ? this.props.answer : {
      body: "",
      username: ""
    }

    let { body, username } = values;

    return(
      <ul className="answer-details">
        <li>{body}</li>
        <li>{username}</li>
      </ul>
    )
  }
}

export default AnswerDetail;
