import React from 'react';
import { elapsed } from '../../util/time_util';

class QuestionDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: 0
    }
    this.findElapsed = this.findElapsed.bind(this);
  }

  findElapsed(){
    let made = new Date(this.props.question.created_at.split(" ").join("T"));
    let current = new Date();
    let newTime = current-made;
    this.setState({time: elapsed(newTime)});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.findElapsed, 1000);
  }

  componentWillUnmount(){
    this.intervalId.clearInterval();
  }


  render(){
    let { title, username } = this.props.question;
    return(
      <div className="question-bar ">
        <div className="upvote-block">

        </div>
        <div className="question-grid">
          <ul className="question-upper">
            <li className="question-title"><h3>{title}</h3></li>
          </ul>
          <ul className="question-lower">
            <li className="question-fill-lower"></li>
            <li className="question-created-at">{this.state.time}</li>
            <li className="question-username">{username}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default QuestionDetail;
