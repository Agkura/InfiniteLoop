import React from 'react';
import { Link } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllQuestions( 10 );
  }

  render(){
    let showQuestions = Object.keys(this.props.questions).map( (key, idx) =>
      (<QuestionDetailContainer key={idx} questionId={key} />)
    )
    return(
      <section className="question-index">
        <div className="questions">
          {showQuestions}
        </div>
      </section>
    )
  }
}

export default QuestionIndex;
