import React from 'react';

class AnswerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let newAnswer = {
      body: this.state.body,
      question_id: this.props.questionId,
      author_id: this.props.userId
    }
    this.props.submitAnswer(newAnswer).then( () => this.setState({
      body: ""
    }))
  }

  answered(){
    let authorKeys = Object.keys(this.props.answers).map( el => (
      this.props.answers[el].authorId
    ))

    if (authorKeys.includes(this.props.userId)) {
      return true;
    } else {
      return false;
    }
  }

  render(){
    let form;
    if (this.props.loggedIn && !this.answered()) {
      form = (<form className="answer-submit" onSubmit={this.handleSubmit}>
        <textarea required="true" rows="10" onChange={this.update("body")} value={this.state.body}></textarea>
        <input type="submit" value="Answer" />
      </form>)
    } else {
      form = null;
    }
    return(
      <div>
        {form}
      </div>
    )
  }
}

export default AnswerForm;
