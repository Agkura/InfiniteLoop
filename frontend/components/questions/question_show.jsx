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
    this.props.clearQuestions();
    this.props.requestQuestion(this.props.questionId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.questionId !== nextProps.questionId) {
      this.props.requestQuestion(nextProps.questionId);
    }
  }


  render(){
    let values;
    values = Boolean(this.props.question) ? this.props.question : {
      title: "",
      username: "",
      body: "",
      createdAt: "",
      id: ""
    }
    let { title, username, body, createdAt, id, authorId } = values;


    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <QuestionShowTitleBar authorId={authorId}
                                  userId={this.props.userId}
                                  title={title}
                                  requestQuestionDelete={this.props.requestQuestionDelete}
                                  id={id}
                                  loggedIn={this.props.loggedIn}
                                  requestQuestionUpdate={this.props.requestQuestionUpdate}
                                  question={this.props.question}
            />
          <li className="body">{body.split('\n').map((item, key) => {
                                  return <span key={key}>{item}<br/></span>
                                })}</li>
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
