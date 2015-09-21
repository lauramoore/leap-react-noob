import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import HandStore from '../stores/HandStore';

function computeGradient(factor){
   var minRed = 5;
   var maxRed = 95;
    //convert factor to percent of 95, floor at 5
    var redPartFactor =  factor * 100;    //maxRed * factor;
    var bluePartFactor = 100 - redPartFactor;
   var blue = 'blue ' + bluePartFactor + '%';
   var red = 'red '+ redPartFactor + '%';
   return {
    background: 'radial-gradient(blue, ' + red + ')'
   };
}
export default React.createClass({
   _onChange() {
    var newState = HandStore.grabStrength(0);
    this.setState( { grab : newState.strength });
  },

  getInitialState() {
      return {
       grab :.5
    }
  },

  componentDidMount() {
    HandStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    HandStore.removeChangeListener(this._onChange);
  },

  getDefaultState() {
    
  },

  render() {
      var styles = computeGradient(this.state.grab);
    
    return (

        <Jumbotron style={styles}>
          <h1>Demo Hand Grab Strength</h1>
          <p>Open and Close Fingers</p>
          <p>  </p>
        </Jumbotron>
    );
  }
});
