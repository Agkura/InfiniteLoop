import React from 'react';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      body: "",
      author_id: this.props.id
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitQuestion(this.state);
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
            <div className="title-block">
              <p className="flex-1">Body</p><p className="flex-2"></p>
            </div>
            <input type="text"
                   placeholder="Body"
                   onChange={this.update("body")}
                   value={this.state.body}>
            </input>
            <input type="submit" value="Ask" />
          </form>
      </aside>
    )
  }
}

export default QuestionForm;
