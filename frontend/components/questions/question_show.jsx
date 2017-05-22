import React from 'react';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <li>{this.props.question.title}</li>
            <li>{this.props.question.username}</li>
            <li>{this.props.question.body}</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default QuestionShow;
