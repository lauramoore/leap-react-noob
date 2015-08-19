import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import HandStore from '../stores/HandStore';

function computeGradient(factor){
   var minRed = 5;
   var maxRed = 95;
    //convert factor to percent of 95, floor at 5
    var redPartFactor = maxRed * (1 - (factor/100))
   var gradientParts = ['to right', 'blue' ,'red'];
   gradientParts[2] = 'red '+ redPartFactor + '%';
   console.log(gradientParts.join());
   return {
    background: 'linear-gradient(' + gradientParts.join() +')'
   };
}
export default React.createClass({
   _onChange() {
    var newState = HandStore.getYPosition();
    this.setState(newState);
  },

  getInitialState() {
      return {
       x : 50,
       y : 0,
       z : 0
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
      var styles = computeGradient(this.state.x);
    
    return (

        <Jumbotron style={styles}>
          <h1>Demo Hand Position Tracking</h1>
          <p>Slide Hand Left and Right to change Gradient</p>
          <p>  {this.state.x}, {this.state.y}, {this.state.z} </p>
        </Jumbotron>
    );
  }
});
