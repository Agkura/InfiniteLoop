import React from 'react';
import { elapsed } from '../../util/time_util';
import AnswerIndexContainer from '../answers/answer_index_container';
import ElapsedTime from './elapsed_time';
import QuestionShowTitleBar from './question_show_title_bar';


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
      createdAt: ""
    }
    let { title, username, body, createdAt } = values;

    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <QuestionShowTitleBar title={title} />
            <li className="body">{body}</li>
            <div className="username-time">
              <li className="time"><ElapsedTime created={createdAt} /></li>
              <li className="username">{username}</li>
            </div>
          </ul>
        </div>
        <AnswerIndexContainer />
      </section>
    )
  }
}

export default QuestionShow;
