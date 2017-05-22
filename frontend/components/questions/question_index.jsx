import React from 'react';
import { Link } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';
import TabIndex from './tab_index';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      tabs: {
        0: {
          content: "Most Recent",
          action: this.props.requestAllQuestions
        },
        1: {
          content: "Your Questions",
          action: this.props.requestUserQuestions
        }
      }
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount(){
    let offset = Math.abs(this.state.page * 20);
    this.props.requestAllQuestions( offset );
  }

  componentWillUpdate( _ , nextState ){
    let currentKeys = "";
    let userQuestions = " ";
    if (this.props.loggedIn) {
      currentKeys = JSON.stringify(Object.keys(this.props.questions).map( el => parseInt(el)));
      userQuestions = JSON.stringify(this.props.userQuestions);
    }
    if (this.state.page !== nextState.page  && currentKeys !== userQuestions){
      this.props.requestAllQuestions( Math.abs(nextState.page * 20));
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.loggedIn && !nextProps.loggedIn) {
      this.props.clearQuestions;
      this.props.requestAllQuestions( 0 );
    }
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



  render(){
    let showQuestions = Object.keys(this.props.questions).reverse().map( (key, idx) =>
      (<QuestionDetailContainer key={idx} questionId={key} />)
    )
    return(
      <section className="question-index">

        <div className="questions">
          <div className="questions-list-navigation">
            <TabIndex tabs={this.state.tabs} loggedIn={this.props.loggedIn}/>
          </div>
          {showQuestions}
          <div className="questions-list-navigation">
            <button onClick={this.handleBack}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleNext}>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default QuestionIndex;
