import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
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
      body: this.props.answer.body
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
    let newAnswer = {
      body: this.state.body,
      id: this.props.answer.id,
      question_id: this.props.questionId
    }
    this.props.requestAnswerUpdate(newAnswer).then( () => this.setState({modalIsOpen: false}));
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
          contentLabel="Answer Edit">
          <h3>Update Answer</h3>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <div className="title-block">
              <p className="flex-1">Answer</p><p className="flex-2"></p>
            </div>
            <textarea width="400px" onChange={this.update("body")} rows="10" required="true" value={this.state.body}></textarea>
            <input type="submit" value="Update" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default EditDeleteModal;
