import React from 'react';
import AnswerIndexContainer from '../answers/answer_index_container';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestQuestion(this.props.questionId)
  }

  render(){
    let values;
    values = Boolean(this.props.question) ? this.props.question : {
      title: "",
      username: "",
      body: "",
      created: ""
    }
    let { title, username, body, createdAt} = values;
    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <li className="title"><h2>{title}</h2></li>
            <li className="body">{body}</li>
            <li className="username">{username}</li>
          </ul>
        </div>
        <AnswerIndexContainer />
      </section>
    )
  }
}

export default QuestionShow;
