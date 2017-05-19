import React from 'react';
import { Link } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    // const tabs = {
    //   0: {
    //     content: 'Tab 1',
    //     action: this.props.fetchWhatever
    //   }
    // }
  // <TabIndex tabs={this.state.tabs} />
  }

  handleNext(e){
    this.setState({
      page: this.state.page + 1
    })
  }

  handleBack(e){
    this.setState({
      page: this.state.page - 1
    })
  }

  componentWillMount(){
    let offset = Math.abs(this.state.page * 20);
    this.props.requestAllQuestions( offset );
  }

  componentWillUpdate( _ , nextState ){
    if (this.state.page !== nextState.page){
      this.props.requestAllQuestions( Math.abs(nextState.page * 20));
    }
  }


  render(){
    let showQuestions = Object.keys(this.props.questions).reverse().map( (key, idx) =>
      (<QuestionDetailContainer key={idx} questionId={key} />)
    )
    return(
      <section className="question-index">

        <div className="questions">
          <button onClick={this.handleNext}>next</button>
          <button onClick={this.handleBack}>back</button>
          {showQuestions}
          <button onClick={this.handleNext}>next</button>
          <button onClick={this.handleBack}>back</button>
        </div>
      </section>
    )
  }
}

export default QuestionIndex;
