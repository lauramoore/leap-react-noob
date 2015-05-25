import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LeapState from './LeapStatus.jsx';
import HandStore from '../stores/HandStore';

function colorForPitch(hand){
  if (! hand) return 'grey';
  var pitchVal = hand['pitch'];
  if (pitchVal > 0) {
    return 'blue';
  } if (pitchVal < 0) {
     return 'red';
  } else {
     return 'grey';
  }
}

export default React.createClass({
   _onChange() {
    var newState = HandStore.getPitchYawRoll();
    this.setState({hand: newState});
  },

  getInitialState() {
     return HandStore.getPitchYawRoll()
  },

  componentDidMount() {
    HandStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    HandStore.removeChangeListener(this._onChange);
  },

  getDefaultState() {
    return {
       hand: {}
    }
  },

  render() {
    var hand = this.state.hand;
    var jumbotronMessage;
    if (hand) {
       jumbotronMessage = <p>TODO Show Hand Info</p>
    } else {
       jumbotronMessage = <p>Put Hand Over Leap Motion</p>
    }
    
    var styles = {
       backgroundColor : colorForPitch(hand)
    }
    
    return (
      <div className="container">
        <Jumbotron style={styles}>
          <h1>LeapMotion</h1>
          {jumbotronMessage}
        </Jumbotron>
        <LeapState />
      </div>
    );
  }
});
