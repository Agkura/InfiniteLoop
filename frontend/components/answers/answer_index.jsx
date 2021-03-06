import React from 'react';
import AnswerDetailContainer from './answer_detail_container';
import AnswerForm from './answer_form';

class AnswerIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAnswers( this.props.questionId );
  }

  componentWillReceiveProps(nextProps){
    if (this.props.questionId !== nextProps.questionId) {
      this.props.requestAnswers(nextProps.questionId);
    }
  }

  componentWillUnmount(){
    this.props.clearAnswers();
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
        <AnswerForm questionAuthorId={this.props.questionAuthorId} answers={this.props.answers} loggedIn={this.props.loggedIn} questionId={this.props.questionId} submitAnswer={this.props.submitAnswer} userId={this.props.userId}/>
      </section>
    )
  }
}

export default AnswerIndex;
