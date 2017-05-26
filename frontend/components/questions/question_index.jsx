import React from 'react';
import { Link } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';
import TabIndex from './tab_index';
import { withRouter } from 'react-router-dom';

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
        3: {
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
    if (this.props.location.pathname !== "/search") {this.props.requestAllQuestions( offset )}
  }

  componentWillUpdate( nextProps , nextState ){
    if (this.state.page !== nextState.page  && nextState.tab === "Most Recent"){
      this.props.requestAllQuestions( Math.abs(nextState.page * 20));
    } else if(this.state.page !== nextState.page  && nextState.tab === "Trending"){
      this.props.requestTrendingQuestions( Math.abs(nextState.page * 20));
    } else if(this.state.page !== nextState.page && nextState.tab === "Your Questions"){
      this.props.requestUserQuestions( Math.abs(nextState.page * 20));
    } else if(nextProps.history.location.pathname !== this.props.history.location.pathname){
      this.props.requestAllQuestions( Math.abs(nextState.page * 20));
    } else if (this.props.location.pathname === "/search" && nextProps.location.pathname === "/" && this.state.tab === nextState.tab){
      this.props.requestAllQuestions( 0 );
    }

  }

  componentWillReceiveProps(nextProps){
    if (this.props.loggedIn && !nextProps.loggedIn) {
      this.props.clearQuestions();
      this.props.requestAllQuestions( 0 );
    }
    if (nextProps.history.location.pathname === "/search") {
      this.setState({
        tabs: {
        0: {
          content: "Most Recent",
          action: this.props.requestAllQuestions
        },
        1: {
          content: "Trending",
          action: this.props.requestTrendingQuestions
        },
        3: {
          content: "Your Questions",
          action: this.props.requestUserQuestions
        },
        2: {
          content: "Search Results"
        }
      },
      tab: "Search Results"
    }) }else {
      this.setState({
        tabs: {
        0: {
          content: "Most Recent",
          action: this.props.requestAllQuestions
        },
        1: {
          content: "Trending",
          action: this.props.requestTrendingQuestions
        },
        3: {
          content: "Your Questions",
          action: this.props.requestUserQuestions
        }
      }
    })

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
    let keys = Object.keys(this.props.questions).reverse();
    let sorted = false;
    if (this.state.tab === "Trending"){
      while(!sorted){
        sorted = true
        for(let i = 0; i < keys.length-1; i++){
          if(this.props.questions[keys[i]].answerCount < this.props.questions[keys[i+1]].answerCount){
            let hold = keys[i]
            keys[i] = keys[i+1]
            keys[i+1] = hold
            sorted = false
          }
        }
      }
    }
    let showQuestions = keys.map( (key, idx) =>
      (<QuestionDetailContainer key={idx} questionId={key} />)
    )
    if (showQuestions.length === 0 ) { showQuestions = (<h3>No Matches</h3>)}
    let goBack = this.state.page <= 0 || this.state.tab === "Search Results" ?  ( <button className="button-disabled">
      <i className="fa fa-chevron-left page-disabled" aria-hidden="true"></i>
    </button>) :
    (<button onClick={this.handleBack}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </button>)
    let goForward = Object.keys(this.props.questions).length < 20 || this.state.tab === "Search Results" ? (
      <button className="button-disabled">
        <i className="fa fa-chevron-right page-disabled" aria-hidden="true"></i>
      </button>
    ) : (
      <button  onClick={this.handleNext}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
  )
    let pages = this.state.tab !== "Your Questions" ? (
      <div className="questions-list-navigation" id="qlv">
        {goBack}
        {goForward}
      </div>
    ) : null;
    return(
      <section className="question-index">

        <div className="questions">
          <div className="questions-list-navigation">
            <TabIndex tabs={this.state.tabs} loggedIn={this.props.loggedIn} handler={this.handler} clearQuestions={this.props.clearQuestions}/>
          </div>
          {showQuestions}
          {pages}
        </div>
      </section>
    )
  }
}

export default withRouter(QuestionIndex);
