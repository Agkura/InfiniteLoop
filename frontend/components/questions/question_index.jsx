import React from 'react';
import { Link } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';
// import TabIndex from './tab_index';

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
          <div className="questions-list-navigation">
            <button onClick={this.handleBack}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
          </div>
          {showQuestions}
          <div className="questions-list-navigation">
            <button onClick={this.handleBack}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
          </div>
        </div>
      </section>
    )
  }
}

export default QuestionIndex;
