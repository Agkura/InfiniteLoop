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
          content: "Trending",
          action: this.props.requestTrendingQuestions
        },
        2: {
          content: "Your Questions",
          action: this.props.requestUserQuestions
        }
      },
      tab: "Most Recent"
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handler = this.handler.bind(this);
  }

  componentWillMount(){
    this.props.clearQuestions();
    let offset = Math.abs(this.state.page * 20);
    this.props.requestAllQuestions( offset );
  }

  componentWillUpdate( _ , nextState ){
    if (this.state.page !== nextState.page  && nextState.tab === "Most Recent"){
      this.props.requestAllQuestions( Math.abs(nextState.page * 20));
    } else if(this.state.page !== nextState.page  && nextState.tab === "Trending"){
      this.props.requestTrendingQuestions( Math.abs(nextState.page * 20));
    } else if(this.state.page !== nextState.page && nextState.tab === "Your Questions"){
      this.props.requestUserQuestions( Math.abs(nextState.page * 20));
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.loggedIn && !nextProps.loggedIn) {
      this.props.clearQuestions();
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

  handler(tab){
    this.setState({ tab: tab, page: 0})
  }



  render(){
    let showQuestions = Object.keys(this.props.questions).reverse().map( (key, idx) =>
      (<QuestionDetailContainer key={idx} questionId={key} />)
    )
    let pages = this.state.tab !== "Your Questions" ? (
      <div className="questions-list-navigation">
        <button onClick={this.handleBack}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button onClick={this.handleNext}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    ) : null;
    return(
      <section className="question-index">

        <div className="questions">
          <div className="questions-list-navigation">
            <TabIndex tabs={this.state.tabs} loggedIn={this.props.loggedIn} handler={this.handler}/>
          </div>
          {showQuestions}
          {pages}
        </div>
      </section>
    )
  }
}

export default QuestionIndex;
