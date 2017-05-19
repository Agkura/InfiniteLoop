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
    let made = new Date(this.props.created.split(" ").join("T"));
    let current = new Date();
    let newTime = current-made;
    this.setState({time: elapsed(newTime)});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.findElapsed, 1000);
  }

  componentWillUnmount(){
    this.intervalId.clearInterval();
  }

  render(){
    return(
      <p>{this.state.time}</p>
    )
  }
}

export default ElapsedTime;
