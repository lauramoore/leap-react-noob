import Constants from '../Constants';
import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Dispatcher from '../Dispatcher';

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
    Dispatcher.handleViewAction({
       type: Constants.ActionTypes.START_LEAP
    });
    this.setState({leapState : "ON"});
   },
   
  handleLeapStop(){
    Dispatcher.handleViewAction({
       type: Constants.ActionTypes.STOP_LEAP
    });
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
