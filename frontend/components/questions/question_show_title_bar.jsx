import React from 'react';
import EditDeleteModal from './edit_delete_modal';
import onClickOutside from 'react-onclickoutside';

class QuestionShowTitleBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleEdit: "off",
      toggleActive: "inactive"
    }
    this.toggleEdit = this.toggleEdit.bind(this);
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

  render(){
    return(
      <div className="title-bar">
        <i onClick={this.toggleEdit} className={"fa fa-chevron-down " + this.state.toggleActive} aria-hidden="true">
          <div className={"edit-dropdown " + this.state.toggleEdit}>
            <p>Delete</p>
            <EditDeleteModal />
          </div>
        </i>
        <li className="title"><h2>{this.props.title}</h2></li>
      </div>
    )
  }
}

export default onClickOutside(QuestionShowTitleBar);
