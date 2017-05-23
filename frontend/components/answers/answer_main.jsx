import React from 'react';
import onClickOutside from 'react-onclickoutside';
import EditDeleteModalAnswer from './edit_delete_modal_answer';

class AnswerMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleEdit: "off",
      toggleActive: "inactive"
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
  }

  toggleEdit(e){
    e.preventDefault();
    this.setState({
      toggleEdit: this.state.toggleEdit === "on" ? "off" : "on",
      toggleActive: this.state.toggleActive === "active" ? "inactive" : "active",
    })
  }

  handleDelete(e){
    this.props.requestAnswerDelete(this.props.questionId, this.props.id);
  }

  handleClickOutside(e){
    this.setState({
      toggleEdit: "off",
      toggleActive: "inactive"
    })
  }

  showDropDown(){
    if (this.props.loggedIn && this.props.userId === this.props.authorId) {
      return (
        <i onClick={this.toggleEdit} className={"fa fa-chevron-down " + this.state.toggleActive} aria-hidden="true">
          <div className={"edit-dropdown " + this.state.toggleEdit}>
            <p onClick={this.handleDelete}>Delete</p>
            <EditDeleteModalAnswer questionId={this.props.questionId} requestAnswerUpdate={this.props.requestAnswerUpdate} answer={this.props.answer}/>
          </div>
        </i>
      )}
  }

  render(){
    return(
      <div className="title-bar">
        <li className="answer">{this.props.body.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                              })}</li>
        {this.showDropDown()}
      </div>
    )
  }
}

export default onClickOutside(AnswerMain);
