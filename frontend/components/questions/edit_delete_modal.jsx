import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class EditDeleteModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      title: this.props.question.title,
      body: this.props.question.body
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let newQuestion = {
      title: this.state.title,
      body: this.state.body,
      id: this.props.question.id,
    }
    this.props.requestQuestionUpdate(newQuestion).then( () => this.setState({modalIsOpen: false}));
  }

  render(){
    return(
      <div className="checking">
        <button onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="edit-modal-after"
          contentLabel="Example Modal">
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input onChange={this.update("title")} type="text" value={this.state.title}></input>
            <input onChange={this.update("body")} type="text" value={this.state.body}></input>
            <input type="submit" value="Update" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default EditDeleteModal;
