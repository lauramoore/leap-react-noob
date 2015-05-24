import LeapActions from '../actions/LeapActionCreators';
import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  propTypes: {
    leapState: PropTypes.oneOf(["OFF","ON"])
   },
   
   getInitialState: function () {
    return {
      leapState : "OFF"
    };
  },

  handleLeapStart(){ 
    console.log("start leap");
    LeapActions.startLeap();
    this.setState({leapState : "ON"});
   },
   
  handleLeapStop(){
    console.log("stop leap");
    LeapActions.stopLeap();
    this.setState({leapState:"OFF"});
  },
  render() {
    if (this.state.leapState === "ON") {
      return(<Button onClick={this.handleLeapStop} bsStyle="danger">Stop</Button>);
    } else {
       return(<Button onClick={this.handleLeapStart} bsStyle="primary">Start</Button>);
    }
  }
});
