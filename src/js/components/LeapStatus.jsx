import Constants from '../Constants';
import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import ControllerActions from '../actions/ControllerActions';
/**
 * Borrowed from Rhttps://react-bootstrap.github.io/components.html
 * Loading Button as a Toggle of State instead
 */
const LeapStatus = React.createClass({
  getInitialState() {
    return {
      isTracking: false
    };
  },

  render() {
    let isTracking = this.state.isTracking;
    return (
      <Button
        bsStyle= { isTracking ? "danger" : "success"}
        onClick={this.handleClick}>
        {isTracking ? 'Stop' : 'Start'}
      </Button>
    );
  },

  handleClick() {
    if (this.state.isTracking) {
      ControllerActions.stopTracking();
    } else {
      ControllerActions.startTracking();
    }
    this.setState({isTracking: (! this.state.isTracking )});
  }
});

module.exports = LeapStatus;
