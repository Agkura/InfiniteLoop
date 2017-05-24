import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      body: "",
      author_id: this.props.id,
      titleError: "",
      bodyError: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors();
    this.props.submitQuestion(this.state)
    .then(el => this.props.history.push(`/questions/${el.question[Object.keys(el.question)[0]].id}`))
    .then(() => this.setState({
      title: "",
      body: "",
      author_id: this.props.id,
      titleError: "",
      bodyError: ""
    }));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      titleError: "",
      bodyError: ""
    })
    if ( nextProps.errors.length > 0 ){
      nextProps.errors.forEach( el => {
        if ( el.indexOf("Title") >= 0){ this.setState({titleError: el});}
        if ( el.indexOf("Body") >= 0){ this.setState({bodyError: el});}
      })
    }
  }

  update(property){
    return ( e ) => this.setState({[property]: e.target.value})
  }

  render(){
    return(
      <aside className="form">
          <form className="main-form" onSubmit={this.handleSubmit}>
            <div className="question-header">
              <h2>Submit Question</h2>
            </div>
            <div className="title-block">
              <p className="flex-1">Title</p><p className="flex-2"></p>
            </div>
            <input type="text"
                   placeholder="Title"
                   onChange={this.update("title")}
                   value={this.state.title}>
            </input>
            <p className="error">{this.state.titleError}</p>
            <div className="title-block">
              <p className="flex-1">Body</p><p className="flex-2"></p>
            </div>
            <textarea rows="10"
                   placeholder="Body"
                   onChange={this.update("body")}
                   value={this.state.body}>
            </textarea>
            <p className="error">{this.state.bodyError}</p>
            <input className="form-submit hvr-fade" type="submit" value="Ask" />
          </form>
      </aside>
    )
  }
}

export default withRouter(QuestionForm);
