import React from 'react';
import { elapsed } from '../../util/time_util';
import AnswerIndexContainer from '../answers/answer_index_container';
import ElapsedTime from './elapsed_time';
import EditDeleteModal from './edit_delete_modal';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleEdit: "off",
      toggleActive: "inactive"
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleWithBlur = this.toggleWithBlur.bind(this);
  }

  componentWillMount(){
    this.props.requestQuestion(this.props.questionId)
  }

  toggleEdit(e){
    e.preventDefault();
    this.setState({
      toggleEdit: this.state.toggleEdit === "on" ? "off" : "on",
      toggleActive: this.state.toggleActive === "active" ? "inactive" : "active",
    })
  }

  toggleWithBlur(e){
    e.preventDefault();
    this.setState({
      toggleEdit: this.state.toggleEdit === "on" ? "off" : "on",
      toggleActive: this.state.toggleActive === "active" ? "inactive" : "active",
    })
  }

  render(){
    let values;
    values = Boolean(this.props.question) ? this.props.question : {
      title: "",
      username: "",
      body: "",
      createdAt: ""
    }
    let { title, username, body, createdAt } = values;

    return(
      <section className="question-show">
        <div className="question-show-block">
          <ul className="question-show-items">
            <div className="title-bar">
              <li className="title"><h2>{title}</h2></li>
              <i tabIndex="0" onBlur={this.toggleWithBlur} onClick={this.toggleEdit} className={"fa fa-chevron-down edit-delete " + this.state.toggleActive} aria-hidden="true"></i>
              <div className={"edit-dropdown " + this.state.toggleEdit}>
                <p>Delete</p>
                <EditDeleteModal />
              </div>
            </div>
            <li className="body">{body}</li>
            <div className="username-time">
              <li className="time"><ElapsedTime created={createdAt} /></li>
              <li className="username">{username}</li>
            </div>
          </ul>
        </div>
        <AnswerIndexContainer />
      </section>
    )
  }
}

export default QuestionShow;
