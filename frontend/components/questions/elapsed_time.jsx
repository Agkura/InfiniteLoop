import React from 'react';
import { elapsed } from '../../util/time_util';

class ElapsedTime extends React.Component{
  constructor(props){
    super(props);
    this.findElapsed = this.findElapsed.bind(this);
    this.state = {
      time: 0
    }
  }

  findElapsed(){
    let made = this.props.created;
    this.setState({time: elapsed(made)});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.findElapsed, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return(
      <p>{this.state.time}</p>
    )
  }
}

export default ElapsedTime;
