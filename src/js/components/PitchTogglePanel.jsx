import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import HandStore from '../stores/HandStore';

function toggleColorByPitch(hand){
  var noHandColor = 'grey';
  var upColor = 'red';
  var downColor = 'blue';
 
  function resolveBackgroundFromPitch(){
    if (! hand) return noHandColor;
      var pitchVal = hand['pitch'];
      if (pitchVal > 0) {
         return upColor;
      } if (pitchVal < 0) {
         return downColor;
      } else {
         return noHandColor;
      }
  }
  return {
     backgroundColor :  resolveBackgroundFromPitch()
  };
  
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
    
    var styles = toggleColorByPitch(this.state.hand);
    
    return (

        <Jumbotron style={styles}>
          <h1>LeapMotion</h1>
          {jumbotronMessage}
        </Jumbotron>
    );
  }
});
