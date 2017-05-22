import React from 'react';
import AnswerDetailContainer from './answer_detail_container';

class AnswerIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAnswers( this.props.questionId );
  }

  render(){
    let answerDetails = Object.keys(this.props.answers).map( (key, idx) => (
      <AnswerDetailContainer key={idx} answer={this.props.answers[key]} questionId={this.props.questionId} />
    ))
    return(
      <section className="answer-block">
        <div className="answer-index">
          {answerDetails}
        </div>
      </section>
    )
  }
}

export default AnswerIndex;
