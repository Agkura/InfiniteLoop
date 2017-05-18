import React from 'react';

class QuestionDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.question.title}
      </div>
    )
  }
}

export default QuestionDetail;
