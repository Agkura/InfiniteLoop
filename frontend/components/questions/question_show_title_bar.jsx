import React from 'react';
import EditDeleteModal from './edit_delete_modal';
import onClickOutside from 'react-onclickoutside';
import { withRouter } from 'react-router-dom';

class QuestionShowTitleBar extends React.Component{
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
            <EditDeleteModal requestQuestionUpdate={this.props.requestQuestionUpdate} question={this.props.question}/>
          </div>
        </i>
      )}
  }

  handleDelete(e){
    this.props.requestQuestionDelete(this.props.id).then( () => this.props.history.push('/'));
  }

  render(){
    return(
      <div className="title-bar">
        <li className="title"><h2>{this.props.title}</h2></li>
        {this.showDropDown()}
      </div>
    )
  }
}

export default withRouter(onClickOutside(QuestionShowTitleBar));
