import React from 'react';

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
      body: ""
    }
    let { title, username, body } = values;
    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <li>{title}</li>
            <li>{username}</li>
            <li>{body}</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default QuestionShow;
